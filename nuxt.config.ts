import { defineNuxtConfig } from 'nuxt/config';
import UnheadVite from '@unhead/addons/vite';

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
      script: [
        {
          type: 'text/partytown',
          async: true,
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5HRV2GV');`,
        },
      ],
      noscript: [
        {
          body: true,
          children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5HRV2GV" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        },
      ],
    },
  },
  components: false,
  css: ['~/assets/css/tailwind.scss'],
  modules: [
    '@nuxtjs/partytown',
    [
      '@nuxt/content',
      {
        markdown: {
          anchorLinks: false,
        },
        highlight: {
          theme: {
            default: 'material-darker',
          },
          preload: ['vue'],
        },
        yaml: false,
      },
    ],
    ['@vueuse/nuxt', { autoImports: false, ssrHandlers: true }],
    '@nuxtjs/supabase',
  ],
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    minify: true,
  },
  partytown: {
    forward: ['dataLayer.push'],
  },
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // routeRules: {
  //   '/snippets/**': {
  //     swr: true,
  //     headers: { 'cache-control': 'no-cache, no-store, must-revalidate' },
  //   },
  // },
  runtimeConfig: {
    public: {
      emailId: '',
      emailKey: '',
      templateId: '',
    },
  },
  srcDir: 'src/',
  vite: {
    // build: {
    //   rollupOptions: {
    //     output: {
    //       manualChunks(id) {
    //         if (id.includes('Prose')) {
    //           return 'prose';
    //         }
    //       },
    //     },
    //   },
    // },
    plugins: [UnheadVite()],
  },
});
