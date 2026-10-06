// Spanish lives at the root and English under /en, each with its own slugs. Every page has a
// counterpart in the other language: the language switcher, hreflang and the sitemap read it here.
export type Lang = 'es' | 'en';
export const LANGS: Lang[] = ['es', 'en'];
export const DEFAULT_LANG: Lang = 'es';

/** BCP 47 tags for hreflang, the sitemap and Intl. */
export const LOCALE: Record<Lang, string> = { es: 'es-ES', en: 'en-US' };

export const ROUTES = {
  home: { es: '/', en: '/en' },
  download: { es: '/descargar', en: '/en/download' },
  subtitles: { es: '/docs/subtitulos', en: '/en/docs/subtitles' },
  data: { es: '/docs/datos', en: '/en/docs/data' },
  build: { es: '/docs/compilar', en: '/en/docs/build' },
  changelog: { es: '/novedades', en: '/en/changelog' },
  legal: { es: '/legal', en: '/en/legal' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof ROUTES;

export const langOf = (path: string): Lang => (path === '/en' || path.startsWith('/en/') ? 'en' : 'es');

/** The same page in both languages, or null for pages without a pair (the 404s). */
export function alternatesOf(path: string): Record<Lang, string> | null {
  return Object.values(ROUTES).find((r) => r.es === path || r.en === path) ?? null;
}
