const nav = [
  {
    text: 'Home',
    name: 'index',
    to: '/',
    delay: '',
  },
  {
    text: 'Snippets',
    name: 'snippets',
    to: '/snippets',
    delay: 'delay-75',
  },
  {
    text: 'Contact',
    name: 'contact',
    to: '/contact',
    delay: 'delay-150',
  },
  // {
  //   text: 'Snippets',
  //   to: '/snippets',
  //   delay: 'delay-150',
  // },
];

const gradients = [
  'from-[#42b883] via-[#f7d486] to-[#f27a7d]',
  'from-[#84ffc9] via-[#aab2ff] to-[#eca0ff]',
  'from-[#4158D0] via-[#C850C0] to-[#FFCC70]',
  'from-[#FA8BFF] via-[#2BD2FF] to-[#2BFF88]',
  'from-[#22c1c3] to-[#fdbb2d]',
];

const bgs = [
  'bg-green-500/20 dark:bg-green-200/90',
  'bg-blue-500/20  dark:bg-blue-200/90',
  'bg-red-500/20  dark:bg-red-200/90',
  'bg-purple-500/20  dark:bg-purple-200/90',
  'bg-orange-500/20  dark:bg-orange-200/90',
];

const projects = [
  {
    url: 'https://flamboyant-heyrovsky-cb0a70.netlify.app',
    title: 'Frontend Workshop for building UI Components',
    description:
      'Ultra-lite version of Storybook built in Vue 3, showcasing Vue 3 UI components & their variations.',
    icon: 'vue',
    viewBox: '0 0 24 24',
  },
  {
    url: 'https://jovial-stroopwafel-e0a8b6.netlify.app/',
    title: 'Storybook 7 UI Library',
    description: 'Latest Storybook 7 with Vue 3, Vite, Typescript & UnoCss',
    icon: 'storybook',
    viewBox: '-31.5 0 319 319',
  },
];

const skills = [
  'Modern Frontend Architecture',
  'User Interface/User Experience',
  'Design Systems',
  'Progressive Enhancement',
  'Core Web Vitals Performance',
  'Solving Problems at Scale',
];

export { bgs, gradients, projects, nav, skills };
