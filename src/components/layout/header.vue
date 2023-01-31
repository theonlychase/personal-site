<script setup lang="ts">
  import { useColorMode } from '@vueuse/core';
  import Navigation from '~/components/layout/navigation.vue';
  import MobileNavigation from '~/components/layout/MobileNavigation.vue';
  import Icon from '~/components/ui/icon/Icon.vue';

  const mode = useColorMode({
    emitAuto: true,
    initialValue: 'light',
    modes: {
      dark: 'dark',
      light: 'light',
    },
    storageKey: 'theme',
  });
</script>

<template>
  <nav
    class="bg-gray-50 dark:bg-black sticky top-0 transition-colors ease-in-out z-20"
  >
    <div
      class="relative flex justify-between items-center max-w-2xl mx-auto px-4 md:px-0 py-6"
    >
      <Navigation />

      <MobileNavigation />

      <button
        type="button"
        class="bg-gray-200 dark:bg-gray-600 hover:ring-2 ring-gray-400 dark:ring-gray-200 rounded-full p-2 transition-all"
        title="Toggle Dark Mode"
        @click="mode = mode === 'dark' ? 'light' : 'dark'"
      >
        <Icon
          :name="mode === 'dark' ? 'sun' : 'moon'"
          class="text-gray-900 dark:text-gray-200"
          size="small"
          :title="mode === 'dark' ? 'Dark' : 'Light'"
        />
      </button>
    </div>
  </nav>
</template>
