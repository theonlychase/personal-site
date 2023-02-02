---
title: 'Chase Isley - Vue 3 Typewriter Component'
_path: '/blog/create-a-typewriter-component-in-vue-3'
description: 'Create a reusable Typewriter component'
---

# Vue 3 Typewriter Component

> Learn to create a reusable Typewriter component

```vue
<script setup lang="ts">
  import { reactive } from 'vue';
  const state = reactive({ text: '', complete: false, index: 0 });

  const props = withDefaults(defineProps<{ data: Array<string> }>(), {
    data: () => [],
  });

  addText();
  
  function addText() {
    if (state.text.length < props.data[state.index].length && !state.complete) {
      state.text += props.data[state.index].charAt(state.text.length);
      setTimeout(addText, 60);
    }
    if (state.text.length === props.data[state.index].length) {
      state.complete = true;
      setTimeout(removeText, 1500);
    }
  }

  function removeText() {
    if (state.text.length > 0) {
      const t = state.text.split('');
      t.pop();
      state.text = t.join('');
      setTimeout(removeText, 30);
    }
    if (state.text.length === 0 && state.complete) {
      state.complete = false;
      if (state.index === props.data.length - 1) {
        state.index = 0;
      } else {
        state.index++;
      }

      setTimeout(addText, 1000);
    }
  }
</script>

<template>
  <p
    class="flex items-center text-lg h-5 animate-blink border-r-2 
    border-transparent w-fit font-semibold dark:text-gray-200"
  >
    {{ state.text }}
  </p>
</template>
```
