<script setup lang="ts">
  import {
    type ComponentOptionsWithArrayProps,
    type Ref,
    computed,
    ref,
    watch,
  } from 'vue';
  import Icon from '~/components/ui/icon/Icon.vue';

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
    },
  });

  const input: Ref<HTMLInputElement | null> = ref(null);

  const isClearable = computed(() => {
    return props.clearable && props.value && !props.disabled;
  });

  const keepFocus: Ref<boolean> = ref(false);

  const rightIcon = computed((): string => {
    if (props.loading) {
      return 'spinner';
    }
    return !props.error
      ? isClearable.value
        ? 'close'
        : props.iconRight
      : 'danger';
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
    v-if="label && variation !== 'labelOverlap' && variation !== 'labelInset'"
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
      'bg-gray-50 border-b-2 shadow-none rounded-none':
        variation === 'underline',
      '!border-red-500': error && variation === 'underline',
      '!border-red-500 !ring-1 !ring-red-500':
        error && variation !== 'underline',
      '!border-green-500 !ring-1 !ring-green-500': keepFocus,
      'shadow-sm border focus-within:ring-1 focus-within:ring-green-500':
        variation !== 'underline',
      'bg-gray-50 pointer-events-none': disabled,
      [`${customClasses}`]: customClasses,
      'px-3 h-10': size === 'medium',
      'px-4 h-12': size === 'large',
    }"
    class="relative flex items-center rounded-md border-gray-300 bg-white dark:bg-black/[.04] focus-within:border-green-500 transition-colors"
  >
    <div
      v-if="iconLeft && variation !== 'labelInset'"
      class="absolute inset-y-0 left-0 pl-3 flex items-center"
    >
      <Icon :name="iconLeft" size="xSmall" class="text-gray-400" />
    </div>

    <label
      v-if="
        label && (variation === 'labelOverlap' || variation === 'labelInset')
      "
      :for="label"
      :class="{
        block: variation === 'labelInset',
        'absolute -top-2 left-2 -mt-px inline-block px-1':
          variation === 'labelOverlap',
        'bg-gray-50': disabled,
      }"
      class="bg-white dark:bg-black/[.04] text-xs font-medium text-gray-900"
    >
      {{ label }}
    </label>

    <input
      :id="label || id"
      ref="input"
      autoComplete="new-password"
      :disabled="disabled"
      :type="type"
      :name="name"
      :class="{
        'bg-gray-50': variation === 'underline' || disabled,
        '!pl-7': iconLeft && variation !== 'labelInset',
      }"
      class="form-input dark:bg-black/[.04] dark:text-gray-300 block w-full min-w-max rounded-md sm:text-sm border-0 pl-0 py-0 pr-7 text-gray-900 placeholder-gray-400 disabled:text-gray-400 focus:ring-0 autofill:!dark:bg-black/[.04]"
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
