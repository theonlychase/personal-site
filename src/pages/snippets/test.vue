<script setup lang="ts">
  import hljs from 'highlight.js/lib/core';
  import 'highlight.js/styles/github.css';
  import javascript from 'highlight.js/lib/languages/javascript';
  hljs.registerLanguage('javascript', javascript);

  const code = `
  const emit = defineEmits(['update:toggled']);
  const toggled = ref(false);

  watch(
    () => toggled.value,
    (val) => {
      emit('update:toggled', val);
    },
  );
  `;

  const test = hljs.highlight(code, { language: 'javascript' });
</script>

<template>
  <div class="prose dark:prose-invert w-full">
    <pre class="flex p-0 border border-gray-200 dark:border-gray-800">
      <code class="flex">
        <span v-html="test.value" />
      </code>
    </pre>
  </div>
</template>
