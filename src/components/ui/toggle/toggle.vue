<script setup lang="ts">
  import { ref, watch } from 'vue';

  const emit = defineEmits(['update:toggled']);
  const toggled = ref(false);

  watch(
    () => toggled.value,
    (val) => {
      emit('update:toggled', val);
    },
  );
</script>

<template>
  <button
    type="button"
    role="switch"
    aria-label="toggle dark mode"
    class="relative shrink-0 bg-gray-200 dark:bg-gray-600 ring-1 hover:ring-2 ring-gray-400 dark:ring-gray-400 rounded-full transition-all overflow-hidden w-12 h-6"
    @click="toggled = !toggled"
  >
    <span
      class="absolute top-0 left-0 w-1/2 h-full transition-all bg-white dark:bg-black rounded-full overflow-hidden flex items-center justify-center"
      :class="{
        'translate-x-full': toggled,
      }"
    >
      <slot />
    </span>
  </button>
</template>
