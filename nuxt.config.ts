import { defineNuxtConfig } from 'nuxt3/config';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineNuxtConfig({
  modules: [['@vueuse/nuxt', { autoImports: false, ssrHandlers: true }]],
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['@/assets/css/tailwind.scss'],
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
