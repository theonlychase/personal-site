<script setup lang="ts">
  interface CardProps {
    active?: boolean;
    borderless?: boolean;
    contentClass?: string;
  }

  withDefaults(defineProps<CardProps>(), {
    active: false,
    borderless: false,
    contentClass: '',
  });
</script>

<template>
  <div
    class="bg-gray-50 overflow-hidden rounded-lg"
    :class="{
      'shadow-sm ring-1 ring-gray-200 ring-inset': !borderless,
    }"
  >
    <div
      v-if="$slots.header"
      class="py-4"
      :class="{
        'px-4': !borderless,
      }"
    >
      <slot name="header" />
    </div>

    <slot
      v-if="$slots.media"
      name="media"
    />

    <div
      class="py-4"
      :class="{
        contentClass: contentClass,
        'px-4': !borderless,
        'border-t border-t-gray-200 dark:border-t-gray-600': $slots.media,
      }"
    >
      <slot />
    </div>

    <div
      v-if="$slots.footer"
      class="py-4"
      :class="{
        'px-4': !borderless,
      }"
    >
      <slot name="footer" />
    </div>
  </div>
</template>
