// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { ROUTES, LANGS } from './src/i18n/routes.ts';

// Canonical address for sitemap, canonical links and Open Graph. Fixed on purpose: deploy
// previews must still point their metadata at production.
const site = 'https://yts-player.netlify.app';

// Spanish at the root, English under /en with its own slugs (src/i18n/routes.ts).
const pairs = Object.values(ROUTES);
const pathOf = (/** @type {string} */ url) => new URL(url).pathname.replace(/\/+$/, '') || '/';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  i18n: {
    locales: [...LANGS],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/404$/.test(pathOf(page)),
      // Each URL lists both language versions (hreflang alternates).
      serialize(item) {
        const path = pathOf(item.url);
        const pair = pairs.find((p) => p.es === path || p.en === path);
        if (pair) item.links = LANGS.map((l) => ({ lang: l, url: new URL(pair[l], site).href }));
        return item;
      },
    }),
  ],
});
