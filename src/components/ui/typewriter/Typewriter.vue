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
    class="flex items-center text-lg h-5 animate-blink border-r-2 border-transparent w-fit font-semibold dark:text-gray-200"
  >
    {{ state.text }}
  </p>
</template>
