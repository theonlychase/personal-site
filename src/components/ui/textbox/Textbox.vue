<script setup lang="ts">
  import {
    type ComponentOptionsWithArrayProps,
    type Ref,
    computed,
    ref,
    watch,
  } from 'vue';

  const emit = defineEmits(['focus', 'keydown', 'update:value']);
  const props = defineProps({
    clearable: {
      type: Boolean,
      default: true,
    },
    customClasses: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    element: {
      type: String,
      default: 'input',
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: '',
    },
    focus: {
      type: Boolean,
      default: false,
    },
    hint: {
      type: String,
      default: null,
    },
    iconLeft: {
      type: String,
      default: '',
    },
    iconRight: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: null,
    },
    placeholder: {
      type: [String, Number],
      default: null,
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val: ComponentOptionsWithArrayProps): boolean => {
        return val.match(/medium|large/);
      },
    },
    type: {
      type: String,
      default: 'text',
      validator: (val: ComponentOptionsWithArrayProps): boolean => {
        return val.match(/text|checkbox|radio|password|number|email|color/);
      },
    },
    value: {
      type: String,
      default: '',
    },
    variation: {
      type: String,
      default: 'solid',
      validator: (val: ComponentOptionsWithArrayProps): boolean => {
        return val.match(/solid|pill/);
      },
    },
  });

  const input: Ref<HTMLInputElement | null> = ref(null);
  const keepFocus: Ref<boolean> = ref(false);

  const isClearable = computed(() => {
    return props.clearable && props.value && !props.disabled;
  });

  const rightIcon = computed((): string => {
    if (props.loading) {
      return 'spinner';
    }
    return isClearable.value ? 'close' : props.iconRight;
  });

  watch(
    () => props.focus,
    (val) => {
      setFocus();
      keepFocus.value = !!val;
    },
  );

  function clear(): void {
    setFocus();
    emit('update:value', '');
  }

  function setFocus(): void {
    input.value && input.value.focus();
  }
</script>

<template>
  <label
    v-if="label"
    :for="label"
    class="block text-sm font-medium text-gray-700"
    :class="{
      'ml-px pl-4': variation === 'pill',
    }"
  >
    {{ label }}
  </label>
  <div
    :class="{
      '!rounded-full': variation === 'pill',
      '!border-red-500 !ring-1 !ring-red-500': error,
      '!border-green-500 !ring-1 !ring-green-500': keepFocus,
      'bg-gray-50 pointer-events-none': disabled,
      'px-3 h-10': size === 'medium',
      'px-4 h-12': size === 'large',
      '!h-full !pr-0': element === 'textarea',
      [`${customClasses}`]: customClasses,
    }"
    class="relative flex items-center rounded-md border border-gray-300 bg-white dark:bg-black/[.04] focus-within:border-green-500 shadow-sm focus-within:ring-1 focus-within:ring-green-500 transition-colors"
  >
    <div
      v-if="iconLeft"
      class="absolute inset-y-0 left-0 pl-3 flex items-center"
      :class="{ 'top-2 bottom-auto': element === 'textarea' }"
    >
      <Icon
        :name="iconLeft"
        size="xSmall"
        :class="!error ? 'text-gray-400' : 'text-red-500'"
      />
    </div>

    <Component
      :is="element"
      :id="label || id"
      ref="input"
      role="presentation"
      autocomplete="off"
      :disabled="disabled"
      :type="type"
      :name="name"
      :class="{
        'bg-gray-50': disabled,
        '!pl-7': iconLeft,
        'form-input': element === 'input',
        'form-textarea min-h-[40px] pt-1.5 !pr-8': element === 'textarea',
      }"
      :rows="element === 'textarea' ? 4 : null"
      class="block w-full rounded-md border-0 pl-0 py-0 pr-7 text-gray-900 dark:bg-black/[.04] dark:text-gray-300 placeholder-gray-400 disabled:text-gray-400 focus:ring-0 autofill:bg-white autofill:dark:!bg-black/[.04]"
      :placeholder="placeholder"
      :value="value"
      @input="({ target }) => emit('update:value', target.value)"
      @keydown="(e) => emit('keydown', e)"
      @focus="(e) => !keepFocus && emit('focus', e)"
    />

    <div
      v-if="rightIcon"
      class="absolute inset-y-0 right-0 pr-3 flex items-center"
      :class="{
        'cursor-pointer': isClearable,
        'pointer-events-none': !isClearable,
        'top-2 bottom-auto': element === 'textarea',
      }"
      @click.prevent="isClearable ? clear() : null"
      @mousedown.prevent="keepFocus = true"
      @mouseup.prevent="keepFocus = false"
    >
      <Icon
        :name="rightIcon"
        :class="
          loading
            ? 'animate-spin text-green-500'
            : error
            ? 'text-red-500'
            : 'text-gray-400'
        "
        size="xSmall"
      />
    </div>

    <div
      v-if="(error && errorMessage) || hint"
      class="absolute -bottom-5 left-0 text-xs text-left truncate w-full"
      :class="{
        'text-red-500': error && errorMessage,
        'text-gray-400': hint && !error && !errorMessage,
      }"
    >
      <template v-if="error && errorMessage">
        {{ errorMessage }}
      </template>
      <template v-if="hint && !error && !errorMessage">
        {{ hint }}
      </template>
    </div>
  </div>
</template>
