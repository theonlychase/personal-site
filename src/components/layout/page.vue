<script setup lang="ts">
  interface PageProps {
    full?: boolean;
  }

  withDefaults(defineProps<PageProps>(), {
    full: false,
  });
</script>

<template>
  <main
    class="flex flex-col flex-1 animate-fadeIn"
    :class="full ? 'w-full' : 'px-4 sm:px-6 lg:px-8'"
  >
    <div class="flex-1 w-full" :class="!full && 'mx-auto max-w-2xl py-8'">
      <slot />
    </div>
  </main>
</template>
