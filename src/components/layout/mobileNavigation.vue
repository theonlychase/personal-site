<script setup lang="ts">
  import { ref } from 'vue';
  import Icon from '~/components/ui/icon/Icon.vue';
  import { nav } from '~/static/data';

  interface MobileNavProps {
    show?: boolean;
  }

  withDefaults(defineProps<MobileNavProps>(), {
    show: false,
  });

  const childTransitions = ref('w-0 opacity-0 -translate-x-4');
  const showMenu = ref(false);

  const toggleMenu = () => {
    document.body.classList.toggle('overflow-hidden');
    showMenu.value = !showMenu.value;
  };

  const onAfterEnter = () => {
    childTransitions.value = 'w-full opacity-100 translate-x-0';
  };

  const onAfterLeave = () => {
    childTransitions.value = 'w-0 opacity-0 -translate-x-4';
  };
</script>

<template>
  <div class="md:hidden">
    <button
      type="button"
      class="bg-transparent md:hidden"
      title="Mobile Menu"
      @click="toggleMenu"
    >
      <Icon name="menu" />
    </button>

    <transition
      enter-active-class="transition-all ease duration-100"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all ease duration-300"
      leave-to-class="opacity-0"
      leave-from-class="opacity-100"
      @after-enter="onAfterEnter"
      @after-leave="onAfterLeave"
    >
      <ul
        v-if="showMenu"
        class="h-screen absolute flex flex-col left-0 w-full space-y-4 px-4 z-20 bg-gray-50 dark:bg-black pt-8 mt-1"
      >
        <li
          v-for="item in nav"
          :key="item.text"
          class="flex transition-all ease duration-300 border-b border-gray-300 dark:border-gray-600 pb-4"
          :class="[childTransitions, item.delay]"
        >
          <NuxtLink
            :to="`${item.to}`"
            active-class="!text-green-500 hover:!text-green-700 dark:!text-green-500 dark:hover:!text-green-700 font-semibold"
            class="custom-link text-lg w-full text-gray-800 hover:text-green-700 dark:text-gray-400 dark:hover:text-green-700 p-1 sm:px-3 sm:py-2 rounded-lg transition-colors"
            @click="showMenu = false"
          >
            {{ item.text }}
          </NuxtLink>
        </li>
        <li
          class="flex transition-all ease duration-300 delay-300"
          :class="[childTransitions]"
        >
          <a
            href="https://github.com/theonlychase"
            target="_blank"
            title="Github"
            class="custom-link text-lg text-gray-800 hover:text-green-700 dark:text-gray-400 dark:hover:text-green-700 px-3 py-2 transition-colors"
          >
            <Icon name="github" size="small" />
          </a>
          <a
            href="https://www.linkedin.com/in/chaseisley/"
            target="_blank"
            title="LinkedIn"
            class="custom-link text-lg text-gray-800 hover:text-green-700 dark:text-gray-400 dark:hover:text-green-700 px-3 py-2 transition-colors"
          >
            <Icon name="linkedin" size="small" />
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>
