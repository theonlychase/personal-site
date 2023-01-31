<script setup lang="ts">
  import Card from '~/components/ui/card/Card.vue';

  interface GradientCardProps {
    direction?: 'horizontal' | 'vertical';
    data: {
      [key: string]: string | number;
    };
  }

  withDefaults(defineProps<GradientCardProps>(), {
    direction: 'vertical',
    data: () => ({
      description: '',
      index: 0,
      path: '',
      title: '',
    }),
  });
</script>

<template>
  <a
    class="transform hover:scale-105 transition-all rounded-xl w-full bg-gradient-to-r p-1 custom-link"
    :href="data._path"
    :title="data.title"
  >
    <Card
      class="h-full flex dark:bg-black !shadow-none !ring-0"
      :class="{ 'flex-col': direction === 'vertical' }"
    >
      <template #media>
        <slot />
      </template>

      <div class="font-semibold text-lg dark:text-white">
        {{ data.title }}
      </div>
      <div v-if="data.description" class="mt-2 text-sm">
        {{ data.description }}
      </div>
    </Card>
  </a>
</template>
