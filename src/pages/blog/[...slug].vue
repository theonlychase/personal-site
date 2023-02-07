<script setup lang="ts">
  const { path } = useRoute();
  const { data: views } = await useFetch(`/api${path}`);
</script>

<template>
  <article class="prose dark:prose-invert">
    <ContentDoc>
      <template #not-found>
        <p>No content found.</p>
      </template>
    </ContentDoc>
  </article>
</template>
