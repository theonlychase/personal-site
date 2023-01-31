<script setup lang="ts">
  import GradientCard from '~/components/common/GradientCard.vue';
  import Icon from '~/components/ui/icon/Icon.vue';
  import { shuffle } from '~/utils/utils';
  const _blog = shuffle();
  const { data } = await useAsyncData('list', () =>
    $fetch('/api/_content/query?only=title,description,_path'),
  );

  useHead({
    title: 'Chase Isley - Blog',
    meta: [
      {
        name: 'description',
        content: 'All Blog Posts',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://chaseisley.dev/blog',
      },
    ],
  });
</script>

<template>
  <h1 class="mb-12">Blog</h1>

  <div class="grid md:grid-cols-2 gap-4">
    <GradientCard
      v-for="({ title, description, _path }, index) in data"
      :key="title"
      :data="{ description, _path, title }"
      :class="_blog[index]"
    >
      <div class="aspect-21/9 flex items-center justify-center bg-green-500/20">
        <Icon name="vue" class="text-green-500 w-24 h-24" title="Vue" />
      </div>
    </GradientCard>
  </div>
</template>
