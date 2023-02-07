<script setup lang="ts">
  const { data: views } = useNuxtData('views');
  const date = new Date(views.value.view.createdAt).toLocaleDateString();
</script>

<template>
  <div
    class="grid grid-cols-[auto_1fr_auto] gap-x-2 items-center text-gray-700 dark:text-gray-400 text-xs font-medium"
  >
    <div>
      {{ date }}
    </div>
    <div class="h-0.5 bg-gray-300 dark:bg-gray-600" />
    <div>{{ views.view.viewCount }} Views</div>
  </div>
</template>
