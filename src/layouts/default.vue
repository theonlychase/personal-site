<script setup lang="ts">
  import LayoutPage from '@/components/layout/page.vue';
  import LayoutHeader from '@/components/layout/header.vue';
  import LayoutFooter from '@/components/layout/footer.vue';
</script>

<template>
  <div id="app">
    <LayoutHeader />

    <LayoutPage>
      <slot />
    </LayoutPage>

    <LayoutFooter />
  </div>
</template>
