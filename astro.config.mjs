// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical address for sitemap, canonical links and Open Graph. Fixed on purpose: deploy
// previews must still point their metadata at production.
const site = 'https://yts-player.netlify.app';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
