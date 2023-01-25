<script setup lang="ts">
  import { reactive } from 'vue';
  const state = reactive({ text: '', complete: false, index: 0 });

  const data = [
    'Modern Frontend Architecture',
    'User Interface/User Experience',
    'Progressive Enhancement',
    'Core Web Vitals Performance',
  ];

  const setText = () => {
    if (state.text.length < data[state.index].length && !state.complete) {
      state.text += data[state.index].charAt(state.text.length);
      setTimeout(setText, 60);
    }
    if (state.text.length === data[state.index].length) {
      state.complete = true;
      setTimeout(removeText, 1500);
    }
  };

  setText();

  const removeText = () => {
    if (state.text.length > 0) {
      const t = state.text.split('');
      t.pop();
      state.text = t.join('');
      setTimeout(removeText, 30);
    }
    if (state.text.length === 0 && state.complete) {
      state.complete = false;
      if (state.index === data.length - 1) {
        state.index = 0;
      } else {
        state.index++;
      }

      setTimeout(setText, 1000);
    }
  };
</script>

<template>
  <h1 class="mb-2">Hi, I'm Chase Isley</h1>
  <p class="text-lg mb-2">I'm a software engineer skilled with</p>

  <p
    class="flex items-center text-lg h-5 animate-blink border-r-2 border-transparent w-fit font-semibold dark:text-gray-200"
  >
    {{ state.text }}
  </p>
</template>
