<script setup lang="ts">
  import GradientCard from '~/components/common/GradientCard.vue';
  import Typewriter from '~/components/ui/typewriter/Typewriter.vue';
  import Icon from '~/components/ui/icon/Icon.vue';
  import { projects, skills } from '~/static/data/data';
  import { shuffle } from '~/utils/utils';
  const _project = shuffle();
  const _blog = shuffle();

  const { data } = await useAsyncData('list', () =>
    $fetch('/api/_content/query?only=short,description,_path'),
  );
</script>

<template>
  <h1>Hi, I'm Chase Isley</h1>
  <p class="text-sm mb-4">Software Engineer</p>

  <Typewriter
    :data="skills"
    class="mb-12"
  />

  <h2 class="mb-4">Projects</h2>

  <div class="grid md:grid-cols-2 gap-4 mb-12">
    <GradientCard
      v-for="({ description, title, url }, index) in projects"
      :key="title"
      :data="{ description, _path: url, title }"
      target="_blank"
      :class="_project[index]"
    >
      <div
        class="aspect-21/9 flex items-center justify-center bg-green-500/20 px-4"
      >
        <Icon
          name="vue"
          class="text-green-500 w-24 h-24"
          title="Vue"
          size="xLarge"
        />
      </div>
    </GradientCard>
  </div>

  <h2 class="mb-4">Blog</h2>

  <div class="flex gap-4">
    <GradientCard
      v-for="({ description, _path, short }, index) in data"
      :key="short"
      :data="{ description, _path, title: short }"
      direction="horizontal"
      :class="_blog[index]"
    >
      <div
        class="aspect-1/1 flex items-center justify-center bg-green-500/20 px-4"
      >
        <Icon
          name="vue"
          class="text-green-500"
          title="Vue"
          size="xLarge"
        />
      </div>
    </GradientCard>
  </div>
</template>
