---
title: 'Chase Isley - Vue 3 Typewriter Component'
short: 'Vue 3 Typewriter Component'
_path: '/snippets/create-a-typewriter-component-in-vue-3'
description: 'Create a reusable Typewriter component using Vue 3, TypeScript, & Tailwind'
created: 'Feb 5, 2023'
---

> Create the Typewriter component

```vue
<!-- Typewriter.vue -->
<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      data: Array<string>;
      start?: number;
      enter?: number;
      end?: number;
      leave?: number;
    }>(),
    {
      data: () => [],
      start: 1000,
      enter: 60,
      end: 1500,
      leave: 30,
    },
  );

  const state = reactive({ text: '', complete: false, index: 0 });

  addText();

  function addText() {
    if (state.text.length < props.data[state.index].length && !state.complete) {
      state.text += props.data[state.index].charAt(state.text.length);
      setTimeout(addText, props.enter);
    }
    if (state.text.length === props.data[state.index].length) {
      state.complete = true;
      setTimeout(removeText, props.end);
    }
  }

  function removeText() {
    if (state.text.length > 0) {
      const t = state.text.split('');
      t.pop();
      state.text = t.join('');
      setTimeout(removeText, props.leave);
    }
    if (state.text.length === 0 && state.complete) {
      state.complete = false;
      if (state.index === props.data.length - 1) {
        state.index = 0;
      } else {
        state.index++;
      }

      setTimeout(addText, props.start);
    }
  }
</script>

<template>
  <p
    class="flex items-center text-lg h-5 animate-blink 
    border-r-2 border-transparent w-fit font-semibold dark:text-gray-200"
  >
    {{ state.text }}
  </p>
</template>
```

> Extend TW config by creating the blink animation

```js
// tailwind.config.js
module.exports = {
  extend: {
    animation: {
      blink: 'blink 1s infinite',
    },
    keyframes: {
      blink: {
        '0%': {
          borderColor: 'transparent',
        },
        '45%': {
          borderColor: 'transparent',
        },
        '50%': {
          borderColor: '#9CA3AF',
        },
        '100%': {
          borderColor: '#9CA3AF',
        },
      },
    }
  },
}
```

> Usage

```vue
<script>
const data = [
  'Typewriter Component',
  'Built with Vue 3, TypeScript, & Tailwind'
];
</script>

<template>
  <Typewriter :data="data" />
</template>
```

> Result

<img src="/typewriter.gif" alt="Typewriter Animated Gif" loading="lazy" />
