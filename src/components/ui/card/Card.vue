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
    class="bg-gray-50 overflow-hidden divide-y divide-gray-200 rounded-lg"
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

    <div :class="contentClass">
      <slot v-if="$slots.media" name="media" />

      <div
        class="py-4"
        :class="{
          'px-4': !borderless,
          'border-t border-gray-200': $slots.media,
        }"
      >
        <slot />
      </div>
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
