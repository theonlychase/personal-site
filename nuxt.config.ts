import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Chase Isley - Software Engineer',
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
  components: false,
  css: ['~/assets/css/tailwind.scss'],
  experimental: {
    payloadExtraction: true,
    viteServerDynamicImports: true,
  },
  modules: [
    [
      '@nuxt/content',
      {
        highlight: {
          theme: {
            default: 'material-darker',
          },
          preload: ['vue'],
        },
      },
    ],
    ['@vueuse/nuxt', { autoImports: false, ssrHandlers: true }],
  ],
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
});
