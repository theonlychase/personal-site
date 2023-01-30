<script setup lang="ts">
  const route = useRoute();
  import { nav } from '~/static/data/data';
</script>

<template>
  <div class="flex items-center space-x-4 -ml-3 sm-max:hidden">
    <a
      v-for="item in nav"
      :key="item.text"
      :href="`${item.to}`"
      :class="{
        '!text-green-500 hover:!text-green-700 dark:!text-green-500 dark:hover:!text-green-700 font-semibold':
          route.href === item.to,
      }"
      class="custom-link text-lg text-gray-800 hover:text-green-700 dark:text-gray-400 dark:hover:text-green-700 p-1 sm:px-3 sm:py-2 transition-colors"
    >
      {{ item.text }}
    </a>
  </div>
</template>
