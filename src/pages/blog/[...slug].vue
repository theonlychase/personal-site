<script setup lang="ts">
  const { path } = useRoute();
  const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne();
  });
</script>

<template>
  <article class="prose dark:prose-invert">
    <ContentRenderer :value="data">
      <!-- render rich text from document -->

      <!-- display if document content is empty -->
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
  </article>
</template>
