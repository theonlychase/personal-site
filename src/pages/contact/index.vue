<script setup lang="ts">
  import ContactForm from '~/components/contact/ContactForm.vue';

  useHead({
    title: 'Chase Isley - Contact',
    link: [
      {
        rel: 'canonical',
        href: 'https://chaseisley.dev/contact',
      },
    ],
  });
</script>

<template>
  <h1 class="mb-12">Contact</h1>

  <ContactForm />
</template>
