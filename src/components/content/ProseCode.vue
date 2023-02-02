<script setup lang="ts">
  interface CardProps {
    code?: string;
    language?: Nullable<string>;
    filename?: Nullable<string>;
    highlights?: [];
    meta?: Nullable<string>;
  }

  withDefaults(defineProps<CardProps>(), {
    code: '',
    language: null,
    filename: null,
    highlights: () => [],
    meta: null,
  });
</script>

<template>
  <slot />
</template>
