<script setup lang="ts">
  import Page from '~/components/layout/page.vue';
  import Header from '~/components/layout/header.vue';
  import Footer from '~/components/layout/footer.vue';
  const route = useRoute();
  const metaTitle = ref(route.meta.title);

  const seoMeta: any = {
    ogTitle: metaTitle.value,
    description: route.meta.description,
    ogDescription: route.meta.description,
  };
  const head: any = {
    titleTemplate: (title: string): any => {
      metaTitle.value = metaTitle.value || title;
      return metaTitle.value;
    },
    link: [
      {
        rel: 'canonical',
        href: `https://chaseisley.dev${route.path}`,
      },
    ],
  };

  useSeoMeta(seoMeta);
  useHead(head);
</script>

<template>
  <div id="app">
    <Header />

    <Page>
      <slot />
    </Page>

    <Footer />
  </div>
</template>
