// CHANGELOG.md from the app's main branch, fetched at build time. Falls back to the copy in
// src/content when GitHub is unreachable, so the build never breaks.
// The changelog is written in English only: both language versions of the site show it as is,
// and a page in another language marks it lang="en" (see `lang`).
import { marked } from 'marked';
import localCopy from '../content/CHANGELOG.md?raw';
import type { Lang } from '../i18n/routes';

const RAW = 'https://raw.githubusercontent.com/GabJS10/yts-movie-player/main/CHANGELOG.md';

export interface Entry {
  version: string;
  date: Date | null;
  /** Release page for this version, from the changelog's link references. */
  url: string | null;
  html: string;
}

export interface Changelog {
  introHtml: string;
  entries: Entry[];
  fromRemote: boolean;
  /** Language the notes are written in. */
  lang: Lang;
}

async function source(): Promise<{ md: string; fromRemote: boolean }> {
  try {
    const res = await fetch(RAW, { signal: AbortSignal.timeout(10_000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { md: await res.text(), fromRemote: true };
  } catch (err) {
    console.warn(`[changelog] using local copy: ${(err as Error).message}`);
    return { md: localCopy, fromRemote: false };
  }
}

let cached: Promise<Changelog> | undefined;
/** Memoised so every page in one build shares a single request. */
export function getChangelog(): Promise<Changelog> {
  return (cached ??= source().then(({ md, fromRemote }) => parse(md, fromRemote)));
}

function parse(md: string, fromRemote: boolean): Changelog {
  // Link reference definitions ("[1.1.0]: https://…") give each version its release URL.
  const refs = new Map<string, string>();
  const body = md.replace(/^\[([^\]]+)\]:\s*(\S+)\s*$/gm, (_, k: string, url: string) => {
    refs.set(k, url);
    return '';
  });

  const [head, ...sections] = body.split(/^## /m);
  const intro = head.replace(/^# .*$/m, '').trim();

  const entries = sections
    .map((section) => {
      const nl = section.indexOf('\n');
      const title = section.slice(0, nl).trim(); // "[1.1.0] - 2026-10-05"
      const m = title.match(/^\[?([^\]\s]+)\]?(?:\s*-\s*(\d{4}-\d{2}-\d{2}))?/);
      if (!m) return null;
      const version = m[1];
      return {
        version,
        date: m[2] ? new Date(`${m[2]}T00:00:00Z`) : null,
        url: refs.get(version) ?? null,
        html: marked.parse(section.slice(nl + 1).trim(), { async: false }),
      } satisfies Entry;
    })
    .filter((e): e is Entry => e !== null && e.version.toLowerCase() !== 'unreleased');

  return { introHtml: marked.parse(intro, { async: false }), entries, fromRemote, lang: 'en' };
}
