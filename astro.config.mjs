import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://qwerty111223344444.github.io',
  base: '/calvary-website',   // имя репозитория
  output: 'static',
  integrations: [tailwind()],
});