import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Em produção própria (orbitasoft.com.br) usa a raiz. A demonstração no GitHub Pages
// define SITE_URL e BASE_PATH no workflow (.github/workflows/deploy.yml).
export default defineConfig({
  site: process.env.SITE_URL || 'https://orbitasoft.com.br',
  base: process.env.BASE_PATH || '/',
  vite: { plugins: [tailwindcss()] },
});
