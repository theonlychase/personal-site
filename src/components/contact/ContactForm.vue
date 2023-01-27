<script setup lang="ts">
  import { reactive } from 'vue';
  import Textbox from '~/components/ui/textbox/Textbox.vue';

  const state = reactive({
    name: '',
    email: '',
    message: '',
  });
</script>

<template>
  <div
    class="overflow-hidden rounded-lg bg-gray-200/50 dark:bg-white/[.04] py-16 px-6 lg:px-8 lg:py-24"
  >
    <div class="relative mx-auto max-w-xl">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shoot me a message
        </h2>
        <p class="mt-4 text-lg leading-6 text-gray-500">
          I'll get back to you as soon as I can
        </p>
      </div>
      <div class="mt-12">
        <form
          action="#"
          method="POST"
          class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <Textbox
            v-model:value="state.name"
            icon-left="user"
            size="large"
            placeholder="Name"
          />
          <Textbox
            v-model:value="state.email"
            icon-left="mail"
            size="large"
            placeholder="Email"
          />
          <div class="sm:col-span-2">
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Message"
              class="form-textarea block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-green-500 focus:ring-green-500 transition-colors placeholder-gray-400 dark:text-gray-300 dark:bg-black/[.04]"
            />
          </div>
          <div class="sm:col-span-2">
            <button
              type="submit"
              class="inline-flex items-center justify-center rounded-md border border-transparent bg-green-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700/90 focus:outline-none"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
