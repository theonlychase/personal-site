<script setup lang="ts">
  const { path } = useRoute();
  await useFetch(`/api${path}`, { key: 'views' });
</script>

<template>
  <article class="prose dark:prose-invert">
    <ContentDoc>
      <template #not-found> <p>No content found.</p> </template>
    </ContentDoc>
  </article>
</template>
