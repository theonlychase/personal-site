<script setup lang="ts">
  import { nav } from '~/static/data';
</script>

<template>
  <div class="flex items-center space-x-4 -ml-3 sm-max:hidden">
    <NuxtLink
      v-for="item in nav"
      :key="item.text"
      :to="`${item.to}`"
      active-class="!text-green-500 hover:!text-green-700 dark:!text-green-500 dark:hover:!text-green-700 font-semibold"
      class="custom-link text-lg text-gray-800 hover:text-green-700 dark:text-gray-400 dark:hover:text-green-700 p-1 sm:px-3 sm:py-2 transition-colors"
    >
      {{ item.text }}
    </NuxtLink>
  </div>
</template>
