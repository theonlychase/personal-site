<script setup lang="ts">
  import { ref, watch } from 'vue';
  import LayoutNavigation from '@/components/layout/navigation.vue';
  import { WcIcon } from 'wc-ui-library';
  import { getUsers } from '~/services/internaAPI';

  const { data } = await useAsyncData('count', (nuxtApp) =>
    getUsers(nuxtApp.$prisma),
  );
  console.log(data.value);

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
  <nav
    class="bg-gray-50 dark:bg-black bg-opacity-60 sticky top-0 transition-colors"
  >
    <div
      class="flex justify-between items-center max-w-screen-md mx-auto px-4 md:px-0 sm:py-6 py-8"
    >
      <LayoutNavigation class="hidden sm:block" />
      <button
        type="button"
        class="bg-gray-200 dark:bg-gray-600 hover:ring-2 ring-gray-400 dark:ring-gray-200 rounded-lg p-2 transition-all"
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
