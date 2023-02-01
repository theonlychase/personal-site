<script setup lang="ts">
  import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
  const { path } = useRoute();
  interface MyCustomParsedContent extends ParsedContent {
    title: string;
    description: string;
  }

  const { data } = await useAsyncData(() =>
    $fetch<MyCustomParsedContent>(
      `/api/_content/query?_params={"where":{"_path":"${path}"}}`,
    ),
  );

  // @ts-ignore
  const { title, description } = data?.value[0];

  useSeoMeta({
    title: () => `Chase Isley - ${title}`,
    ogTitle: () => `Chase Isley - ${title}`,
    description: () => description,
    ogDescription: () => description,
  });
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
