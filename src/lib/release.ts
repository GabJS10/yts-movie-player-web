// Latest release of the app, fetched once at build time. Never fails the build:
// on any error every download points at the releases page.

const REPO = 'GabJS10/yts-movie-player';
export const RELEASES_LATEST = `https://github.com/${REPO}/releases/latest`;
export const REPO_URL = `https://github.com/${REPO}`;

export type PlatformKey = 'win' | 'deb' | 'rpm' | 'appimage';

export interface Asset {
  /** Real file name, or null when the API was unavailable. */
  name: string | null;
  url: string;
}

export interface Release {
  ok: boolean;
  /** "1.1.0", or null when unknown. */
  version: string | null;
  tag: string | null;
  publishedAt: Date | null;
  url: string;
  assets: Record<PlatformKey, Asset>;
}

const SUFFIX: Record<PlatformKey, string> = {
  win: '_x64-setup.exe',
  deb: '_amd64.deb',
  rpm: '.x86_64.rpm',
  appimage: '_amd64.AppImage',
};

const fallbackAsset = (): Asset => ({ name: null, url: RELEASES_LATEST });

const FALLBACK: Release = {
  ok: false,
  version: null,
  tag: null,
  publishedAt: null,
  url: RELEASES_LATEST,
  assets: { win: fallbackAsset(), deb: fallbackAsset(), rpm: fallbackAsset(), appimage: fallbackAsset() },
};

interface GhAsset { name: string; browser_download_url: string }
interface GhRelease { tag_name: string; published_at: string; html_url: string; assets: GhAsset[] }

async function load(): Promise<Release> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'yts-movie-player-web-build',
  };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
      headers,
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const gh = (await res.json()) as GhRelease;

    const pick = (key: PlatformKey): Asset => {
      const a = gh.assets.find((x) => x.name.endsWith(SUFFIX[key]));
      return a ? { name: a.name, url: a.browser_download_url } : { name: null, url: gh.html_url };
    };

    return {
      ok: true,
      version: gh.tag_name.replace(/^v/, ''),
      tag: gh.tag_name,
      publishedAt: gh.published_at ? new Date(gh.published_at) : null,
      url: gh.html_url,
      assets: { win: pick('win'), deb: pick('deb'), rpm: pick('rpm'), appimage: pick('appimage') },
    };
  } catch (err) {
    console.warn(`[release] using fallback links: ${(err as Error).message}`);
    return FALLBACK;
  }
}

let cached: Promise<Release> | undefined;
/** Memoised so every page in one build shares a single request. */
export const getRelease = () => (cached ??= load());

export const formatDate = (d: Date) =>
  new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })
    .format(d)
    .replace('.', '');
