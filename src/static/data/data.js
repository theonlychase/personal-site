const nav = [
  {
    text: 'Home',
    name: 'index',
    to: '/',
    delay: '',
  },
  {
    text: 'Blog',
    name: 'blog',
    to: '/blog',
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
  'bg-[#42b883]/20',
  'bg-[#84ffc9]/20',
  'bg-[#C850C0]/20',
  'bg-[#2BD2FF]/10',
  'bg-[#f27a7d]/10',
];

const projects = [
  {
    url: 'https://flamboyant-heyrovsky-cb0a70.netlify.app',
    title: 'Frontend Workshop for building UI Components',
    description:
      'Ultra-lite version of Storybook built in Vue 3, showcasing Vue 3 UI components & their variations.',
    gradient: 'from-[#42b883] via-[#f7d486] to-[#f27a7d]',
  },
  // {
  //   gradient: 'from-[#84ffc9] via-[#aab2ff] to-[#eca0ff]',
  // },
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
