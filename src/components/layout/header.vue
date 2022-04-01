<script setup lang="ts">
  import { ref, watch } from 'vue';
  import LayoutNavigation from '@/components/layout/navigation.vue';
  import { WcIcon } from 'wc-ui-library';

  const darkMode = ref(false);

  watch(darkMode, (val) => {
    const html = document.querySelector('html');
    if (val) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  });
</script>

<template>
  <nav class="bg-gray-50 dark:bg-black bg-opacity-60 sticky top-0">
    <div class="flex justify-between max-w-screen-md mx-auto py-8">
      <LayoutNavigation />
      <button
        type="button"
        class="bg-gray-200 dark:bg-gray-600 hover:ring-2 ring-gray-400 dark:ring-gray-200 rounded-lg sm:p-2 transition-all"
        @click="darkMode = !darkMode"
      >
        <WcIcon
          :name="!darkMode ? 'moon' : 'sun'"
          color="gray50"
          class="stroke-gray-900 dark:stroke-gray-50 stroke-2"
          size="small"
        />
      </button>
    </div>
  </nav>
</template>
