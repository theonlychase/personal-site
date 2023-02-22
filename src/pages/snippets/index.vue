<script setup lang="ts">
  import GradientCard from '~/components/common/GradientCard.vue';
  import Icon from '~/components/ui/icon/Icon.vue';
  import { shuffle } from '~/utils/utils';
  const _blog = shuffle();
  const { data } = await useAsyncData('list', () =>
    $fetch('/api/_content/query?only=short,description,_path'),
  );

  definePageMeta({
    title: 'Chase Isley - Snippets',
    description: 'Recent Blog Posts',
  });
</script>

<template>
  <h1 class="mb-12">Snippets</h1>

  <div class="grid gap-4">
    <GradientCard
      v-for="({ short, description, _path }, index) in data"
      :key="short"
      :data="{ description, _path, title: short }"
      direction="horizontal"
      :class="_blog[index]"
    >
      <div
        class="aspect-21/9 flex items-center justify-center bg-green-500/20 dark:bg-green-200/90 px-4"
      >
        <Icon
          name="vue"
          class="text-green-500"
          size="xLarge"
          title="Vue"
        />
      </div>
    </GradientCard>
  </div>
</template>
