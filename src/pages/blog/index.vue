<script setup lang="ts">
  import Card from '~/components/ui/card/Card.vue';
  import Icon from '~/components/ui/icon/Icon.vue';
  import { gradients } from '~/static/data/data';
  import { shuffle } from '~/utils/utils';
  const _gradients = shuffle(gradients);
  const { data } = await useFetch(
    '/api/_content/query?only=title,description,_path',
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
    <a
      v-for="({ title, description, _path }, index) in data"
      :key="title"
      class="transform hover:scale-105 transition-all rounded-xl w-full bg-gradient-to-r p-1 custom-link"
      :class="_gradients[index]"
      :href="_path"
      :title="title"
    >
      <Card class="h-full dark:bg-black !shadow-none !ring-0">
        <template #media>
          <div
            class="aspect-21/9 flex items-center justify-center bg-green-500/20"
          >
            <Icon name="vue" class="text-green-500 w-24 h-24" title="Vue" />
          </div>
        </template>
        <div class="font-semibold text-lg dark:text-white">
          {{ title }}
        </div>
        <div v-if="description" class="m1-2 text-sm">
          {{ description }}
        </div>
      </Card>
    </a>
  </div>
</template>
