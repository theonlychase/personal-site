<script setup lang="ts">
  import Page from '~/components/layout/page.vue';
  import Header from '~/components/layout/header.vue';
  import Footer from '~/components/layout/footer.vue';
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
