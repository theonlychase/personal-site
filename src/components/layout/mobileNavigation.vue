<script setup lang="ts">
  import { ref } from 'vue';
  import { WcIcon } from 'wc-ui-library';

  const nav = [
    {
      text: 'Home',
      to: '/',
      delay: '',
    },
    {
      text: 'Blog',
      to: '/blog',
      delay: 'delay-50',
    },
    {
      text: 'Contact',
      to: '/contact',
      delay: 'delay-100',
    },
  ];

  const showMenu = ref(false);
  const childTransitions = ref('w-0 opacity-0 -translate-x-4');

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
    <button type="button" class="bg-transparent md:hidden" @click="toggleMenu">
      <WcIcon
        name="menuAlt2Stroke"
        class="!stroke-gray-800 dark:!stroke-gray-200"
        size="small"
      />
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
        class="h-screen absolute flex flex-col left-0 w-full space-y-4 px-4 z-20 bg-gray-50 dark:bg-black mt-8"
      >
        <li
          v-for="item in nav"
          :key="item.text"
          class="flex transition-all ease duration-300 border-b border-gray-300 dark:border-gray-700 pb-4"
          :class="[childTransitions, item.delay]"
        >
          <NuxtLink
            :to="`${item.to}`"
            active-class="!text-green-500 hover:!text-green-700 dark:!text-green-500 dark:hover:!text-green-500 font-semibold"
            class="custom-link w-full text-gray-800 hover:text-green-700 dark:text-gray-200 dark:hover:text-green-700 p-1 sm:px-3 sm:py-2 rounded-lg transition-colors"
            @click="showMenu = false"
          >
            {{ item.text }}
          </NuxtLink>
        </li>
      </ul>
    </transition>
  </div>
</template>
