<script setup lang="ts">
  const { path } = useRoute();
  const data = await $fetch(`/api/_content/query?path=${path}`);
</script>

<template>
  <article class="prose dark:prose-invert">
    <ContentRenderer :value="data[0]">
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
  </article>
</template>
