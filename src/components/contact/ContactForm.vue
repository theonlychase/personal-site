<script setup lang="ts">
  import { reactive, Ref, ref } from 'vue';
  import Textbox from '~/components/ui/textbox/Textbox.vue';
  import Icon from '~/components/ui/icon/Icon.vue';
  import { injectScript, validateEmail } from '~/utils/utils';
  const config = useRuntimeConfig();

  interface FormState {
    [key: string]: { value: string; error: boolean; errorMessage: string };
  }
  const messages = {
    required: 'is required',
    email: 'Email is not valid',
    success: 'Your message was successfully sent!',
  };

  const scriptLoaded = ref(false);
  const form = ref(null);
  const loading = ref(false);
  const success = ref(false);
  const emailJs: Ref<{
    init: (key: string) => void;
    sendForm: (
      serviceId: string,
      templateId: string,
      form: HTMLFormElement | null,
      publicKey: string,
    ) => { status: number; text: string };
  } | null> = ref(null);

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

  async function onSubmit() {
    success.value = false;
    const isValid = validate();
    if (!isValid) {
      return;
    }

    loading.value = true;
    await initEmailJs();

    if (isValid && emailJs.value) {
      try {
        const resp = await emailJs.value?.sendForm(
          config.public.emailId,
          config.public.templateId,
          form.value,
          config.public.emailKey,
        );

        if (resp.status === 200) {
          success.value = true;
          resetForm();
        }
      } catch (e) {
        console.error(e);
      }
    }
  }

  async function initEmailJs() {
    if (!scriptLoaded.value) {
      scriptLoaded.value = await injectScript({
        src: 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js',
        id: 'emailjs',
      });
      if (scriptLoaded.value && !emailJs.value) {
        // @ts-ignore
        emailJs.value = window?.emailjs;
      }
    }
  }

  function setError(
    field: { value: string; error: boolean; errorMessage: string },
    error: boolean,
    msg: string,
  ): void {
    field.error = error;
    field.errorMessage = msg;
  }

  function validate(): boolean {
    for (const key in state) {
      // Required Validation
      if (state[key].value === '') {
        setError(state[key], true, messages.required);
      }
      // Email Validation
      if (key === 'email' && !validateEmail(state.email.value)) {
        setError(state.email, true, messages.email);
      }
    }
    return Object.values(state).every((v) => !v.error);
  }

  function resetForm() {
    loading.value = false;
    for (const key in state) {
      state[key].value = '';
      state[key].error = false;
      state[key].errorMessage = '';
    }
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
          ref="form"
          class="grid gap-y-8 sm:grid-cols-2 sm:gap-x-8"
          @submit.prevent="onSubmit"
        >
          <Textbox
            v-model:value="state.name.value"
            :error="state.name.error"
            :error-message="
              state.name.error ? `Name ${state.name.errorMessage}` : ''
            "
            icon-left="user"
            name="user_name"
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
            name="user_email"
            size="large"
            placeholder="Email"
            @update:value="
              state.email.error ? setError(state.email, false, '') : null
            "
          />
          <div class="sm:col-span-2">
            <Textbox
              v-model:value="state.message.value"
              name="message"
              element="textarea"
              :error="state.message.error"
              :error-message="
                state.message.error
                  ? `Message ${state.message.errorMessage}`
                  : ''
              "
              icon-left="pen"
              placeholder="Message"
              @update:value="
                state.message.error ? setError(state.message, false, '') : null
              "
            />
          </div>
          <div class="relative sm:col-span-2">
            <button
              type="submit"
              title="Submit"
              class="inline-flex items-center justify-center rounded-md border border-transparent bg-green-700 px-6 py-3 font-medium text-white shadow-sm hover:bg-green-700/90 focus:outline-none"
            >
              Submit
              <Icon
                :name="!loading ? 'send' : 'spinner'"
                size="small"
                class="ml-4 text-white"
                :class="loading ? 'animate-spin' : ''"
              />
            </button>
            <div v-if="success" class="animate-fadeIn absolute text-lg mt-4">
              {{ messages.success }}
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
