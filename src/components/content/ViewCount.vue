<script setup lang="ts">
  import { type ViewCount } from '~/types/content';
  interface ViewCountProps {
    views: ViewCount;
  }

  const props = withDefaults(defineProps<ViewCountProps>(), {
    views: () => ({
      createdAt: new Date(),
      viewCount: 0,
    }),
  });
  const date = new Date(props.views.createdAt).toLocaleDateString();
</script>

<template>
  <div
    class="grid grid-cols-[auto_1fr_auto] gap-x-2 items-center text-gray-700 dark:text-gray-400 text-xs font-medium"
  >
    <div>
      {{ date }}
    </div>
    <div class="h-0.5 bg-gray-300 dark:bg-gray-600" />
    <div>{{ views.viewCount }} Views</div>
  </div>
</template>
