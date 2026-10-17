import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://semgolpe.franklem.com',
  output: 'static',
  integrations: [sitemap({
    filter: (page) => {
      const pathname = new URL(page).pathname;
      return !pathname.startsWith('/golpes/');
    },
  })],
  build: { format: 'directory' },
  compressHTML: true,
});
