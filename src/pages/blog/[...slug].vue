<script setup lang="ts">
  import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
  import ViewCount from '~/components/content/ViewCount.vue';
  const { path } = useRoute();

  const { data } = await useAsyncData(`${path}`, async () => {
    const [content] = await $fetch<ParsedContent[]>(
      `/api/_content/query?_params={"where":{"_path":"${path}"}}&onlyOne=true`,
    );
    if (content) {
      const { view = {} } = await $fetch<ParsedContent>(`/api${path}`);
      content.view = view;
    }
    return content;
  });
</script>

<template>
  <article class="prose dark:prose-invert">
    <ContentRenderer :value="data">
      <h1>{{ data?.short }}</h1>

      <ViewCount :views="data?.view" />

      <ContentRendererMarkdown :value="data" />

      <template #empty> No Content Found </template>
    </ContentRenderer>
  </article>
</template>
