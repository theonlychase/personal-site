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
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/manifest.webmanifest',
        },
      ],
    },
  },
  components: [
    {
      path: '~/components',
      global: false,
      pathPrefix: false,
    },
  ],
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
