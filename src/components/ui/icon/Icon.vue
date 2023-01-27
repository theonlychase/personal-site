<script setup lang="ts">
  import { type ComponentOptionsWithArrayProps, computed } from 'vue';
  import { getIcon, sizeClasses } from './icons';

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value: ComponentOptionsWithArrayProps): boolean => {
        return value.match(/(xxSmall|xSmall|small|medium|large|xLarge)/);
      },
    },
    title: {
      type: String,
      default: '',
    },
    viewBox: {
      type: String,
      default: '0 0 24 24',
    },
  });

  const computedSvg = computed(() =>
    props.name
      ? `<title>${props.title || props.name}</title>${getIcon(props.name)}`
      : console.error('Icon does not exist', props.name),
  );
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    class="fill-current"
    :class="[sizeClasses[props.size]]"
    role="presentation"
    v-html="computedSvg"
  />
</template>
