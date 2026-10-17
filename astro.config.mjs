import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import linksOficiais from './scripts/links-oficiais.mjs';

export default defineConfig({
  site: 'https://semgolpe.franklem.com',
  output: 'static',
  integrations: [sitemap(), linksOficiais()],
  build: { format: 'directory' },
  compressHTML: true,
});

