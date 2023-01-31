<script setup lang="ts">
  const { path } = useRoute();
  const { data } = await useAsyncData('blog', () =>
    $fetch(`/api/_content/query?_params={"where":{"_path":"${path}"}}`),
  );

  // @ts-ignore
  const { title, description, _path } = data?.value[0] ?? {};

  useHead({
    title: `Chase Isley - ${title}`,
    meta: [
      {
        name: 'description',
        content: `${description}`,
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: `https://chaseisley.dev${_path}`,
      },
    ],
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
