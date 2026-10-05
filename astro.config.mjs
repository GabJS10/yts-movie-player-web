// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Netlify sets URL to the site's primary address; the fallback is the planned subdomain.
const site = process.env.URL || 'https://yts-player.netlify.app';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
