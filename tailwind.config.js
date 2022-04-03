module.exports = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{vue,js,ts}',
    './src/layouts/**/*.{vue,js,ts}',
    './src/pages/**/*.{vue,js,ts}',
    './node_modules/wc-ui-library/dist/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      animation: {
        'loading-before': 'loading-before 1s ease-out infinite',
        'loading-after': 'loading-after 1s ease-out infinite',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '16/9': '16 / 9',
      },
      keyframes: {
        'loading-before': {
          '0%': {
            left: '-100%',
            width: '100%',
          },
          '100%': {
            left: '100%',
            width: '100%',
          },
        },
        'loading-after': {
          '0%': {
            left: '-100%',
            width: '100%',
          },
          '100%': {
            left: '100%',
            width: '100%',
          },
        },
      },
      screens: {
        'sm-max': {
          max: '767px',
        },
      },
      transitionDuration: {
        0: '0ms',
        50: '50ms',
      },
      transitionDelay: {
        50: '50ms',
      },
    },
    colors: {
      black: 'var(--color--black)',
      gray: {
        50: 'var(--color--gray50)',
        100: 'var(--color--gray100)',
        200: 'var(--color--gray200)',
        300: 'var(--color--gray300)',
        400: 'var(--color--gray400)',
        500: 'var(--color--gray500)',
        600: 'var(--color--gray600)',
        700: 'var(--color--gray700)',
        800: 'var(--color--gray800)',
        900: 'var(--color--gray900)',
      },
      green: {
        500: 'var(--color--green500)',
        700: 'var(--color--green700)',
      },
      transparent: 'var(--color--transparent)',
      white: 'var(--color--white)',
      currentColor: 'var(--color--currentColor)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
  corePlugins: {
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropFilter: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
    backgroundBlendMode: false,
    blur: false,
    boxDecorationBreak: false,
    brightness: false,
    container: false,
    contrast: false,
    dropShadow: false,
    filter: false,
    grayscale: false,
    hueRotate: false,
    invert: false,
    isolation: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringOpacity: false,
    sepia: false,
    saturate: false,
  },
};
