<script setup lang="ts">
  import { reactive, watch } from 'vue';
  import Textbox from '~/components/ui/textbox/Textbox.vue';
  import { validateEmail } from '~/utils/utils';

  interface FormState {
    [key: string]: { value: string; error: boolean; errorMessage: string };
  }
  const errorMessages = {
    required: 'is required',
    email: 'Email is not valid',
  };

  const setError = (
    field: { value: string; error: boolean; errorMessage: string },
    error: boolean,
    msg: string,
  ) => {
    field.error = error;
    field.errorMessage = msg;
  };

  const state: FormState = reactive({
    name: {
      value: '',
      error: false,
      errorMessage: '',
    },
    email: {
      value: '',
      error: false,
      errorMessage: '',
    },
    message: {
      value: '',
      error: false,
      errorMessage: '',
    },
  });

  function onSubmit() {
    const isValid = validate();

    if (isValid) {
      console.log(state);
    }
  }

  function validate() {
    for (const key in state) {
      // Required Validation
      if (state[key].value === '') {
        setError(state[key], true, errorMessages.required);
      }
      // Email Validation
      if (key === 'email' && !validateEmail(state.email.value)) {
        setError(state.email, true, errorMessages.email);
      }
    }
    return Object.values(state).every((v) => !v.error);
  }
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
          class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          @submit.prevent="onSubmit"
        >
          <Textbox
            v-model:value="state.name.value"
            :error="state.name.error"
            :error-message="
              state.name.error ? `Name ${state.name.errorMessage}` : ''
            "
            icon-left="user"
            size="large"
            placeholder="Name"
            @update:value="
              state.name.error ? setError(state.name, false, '') : null
            "
          />
          <Textbox
            v-model:value="state.email.value"
            :error="state.email.error"
            :error-message="state.email.errorMessage"
            icon-left="mail"
            size="large"
            placeholder="Email"
            @update:value="
              state.email.error ? setError(state.email, false, '') : null
            "
          />
          <div class="sm:col-span-2">
            <textarea
              id="message"
              :value="state.message.value"
              name="message"
              rows="4"
              placeholder="Message"
              class="form-textarea block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-green-500 focus:ring-green-500 transition-colors placeholder-gray-400 dark:text-gray-300 dark:bg-black/[.04]"
              :class="
                state.message.error
                  ? '!border-red-500 !ring-1 !ring-red-500'
                  : ''
              "
              @input="
                ({ target }) => {
                  state.message.value = target.value;
                  if (state.message.error) {
                    setError(state.message, false, '');
                  }
                }
              "
            />
            <div
              v-if="state.message.error"
              class="mt-1 text-red-500 text-xs text-left truncate w-full"
            >
              Message {{ state.message.errorMessage }}
            </div>
          </div>
          <div class="sm:col-span-2">
            <button
              type="submit"
              title="Submit"
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
