<script setup lang="ts">
  import { projects, skills } from '~/static/data/data';

  useHead({
    link: [
      {
        rel: 'canonical',
        href: 'https://chaseisley.dev',
      },
    ],
  });
</script>

<template>
  <h1>Hi, I'm Chase Isley</h1>
  <p class="text-sm mb-4">Software Engineer</p>

  <Typewriter :data="skills" class="mb-12" />

  <h2 class="mb-4">Latest Projects</h2>

  <div class="grid md:grid-cols-2 gap-4">
    <a
      v-for="{ description, title, url, gradient } in projects"
      :key="title"
      class="transform hover:scale-105 transition-all rounded-xl w-full bg-gradient-to-r p-1 custom-link"
      :class="gradient"
      :href="url"
      :title="title"
      target="_blank"
    >
      <Card class="h-full dark:bg-black" content-class="px-4" borderless>
        <div class="font-semibold text-lg dark:text-white">
          {{ title }}
        </div>
        <div v-if="description" class="mt-2 text-sm">
          {{ description }}
        </div>
      </Card>
    </a>
  </div>
</template>
