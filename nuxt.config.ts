import { defineNuxtConfig } from 'nuxt3/config';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Chase Isley - Software Engineer',
      charset: 'utf-8',
      meta: [],
      link: [],
    },
  },
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
