import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://calvarybaseball-tver.ru',
  base: '/', 
  output: 'static',
  integrations: [tailwind()],
});