<script setup lang="ts">
  import { ref, watch } from 'vue';
  import LayoutNavigation from '@/components/layout/navigation.vue';
  import LayoutMobileNavigation from '@/components/layout/mobileNavigation.vue';
  import Icon from '@/components/ui/icons/icon.vue';
  // import Toggle from '@/components/ui/toggle';

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
      class="relative flex justify-between items-center max-w-2xl mx-auto px-4 md:px-0 py-6"
    >
      <LayoutNavigation />
      <LayoutMobileNavigation />

      <!--      <Toggle v-model:toggled="darkMode">-->
      <!--        <icons-->
      <!--          :name="!darkMode ? 'moonSolid' : 'sun'"-->
      <!--          :color="!darkMode ? 'white' : 'gray300'"-->
      <!--          class="stroke-gray-900 dark:stroke-gray-300 stroke-2 rounded-full"-->
      <!--          size="xSmall"-->
      <!--        />-->
      <!--      </Toggle>-->
      <button
        type="button"
        class="bg-gray-200 dark:bg-gray-600 hover:ring-2 ring-gray-400 dark:ring-gray-200 rounded-full p-2 transition-all"
        @click="darkMode = !darkMode"
      >
        <Icon
          :name="!darkMode ? 'moon' : 'sun'"
          color="gray200"
          class="stroke-gray-900 dark:stroke-gray-200 stroke-2"
          size="small"
        />
      </button>
    </div>
  </nav>
</template>
