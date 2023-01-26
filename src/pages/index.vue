<script setup lang="ts">
  import Typewriter from '~/components/ui/typewriter/typewriter.vue';
  import { skills } from '~/static/data';
</script>

<template>
  <h1>Hi, I'm Chase Isley</h1>
  <p class="text-sm mb-4">Software Engineer</p>
  <p class="text-lg mb-2">Some of my skills include:</p>

  <Typewriter :data="skills" />
</template>
