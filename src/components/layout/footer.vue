<script setup lang="ts">
  import { nav } from '~/static/data';
</script>

<template>
  <footer
    class="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8 px-4 md:px-0"
  >
    <hr class="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />

    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
      <div class="flex flex-col">
        <NuxtLink
          v-for="item in nav"
          :key="item.text"
          :to="`${item.to}`"
          :title="item.text"
          class="custom-link text-gray-800 hover:text-green-700 dark:text-gray-400 dark:hover:text-green-700 px-3 py-2 transition-colors"
        >
          {{ item.text }}
        </NuxtLink>
      </div>
      <div class="flex flex-col">
        <a
          href="https://github.com/theonlychase"
          target="_blank"
          title="Github"
          class="custom-link text-gray-800 hover:text-green-700 dark:text-gray-400 dark:hover:text-green-700 px-3 py-2 transition-colors"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/chaseisley/"
          target="_blank"
          title="Github"
          class="custom-link text-gray-800 hover:text-green-700 dark:text-gray-400 dark:hover:text-green-700 px-3 py-2 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
</template>
