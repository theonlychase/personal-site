import { defineNuxtConfig } from 'nuxt3/config';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: "Chase Isley's Portfolio",
      charset: 'utf-8',
      meta: [
        {
          name: 'description',
          content:
            'Chase Isley is a software engineer highly skilled at modern front-end architecture, design systems, and solving problems at scale.',
        },
      ],
      link: [],
    },
  },
  css: ['@/assets/css/tailwind.scss'],
  // imports: {
  //   autoImport: false,
  // },
  modules: [['@vueuse/nuxt', { autoImports: false, ssrHandlers: true }]],
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      emailId: '',
      emailKey: '',
      templateId: '',
    },
  },
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
