import { defineNuxtConfig } from 'nuxt3';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt'],
  vueuse: {
    autoImports: false,
    ssrHandlers: true,
  },
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['@/assets/css/tailwind.css'],
  srcDir: 'src/',
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
    plugins: [visualizer()],
  },
});
