module.exports = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{vue,js,ts}',
    './src/layouts/*.{vue,js,ts}',
    './src/pages/**/*.{vue,js,ts}',
    './src/static/data/*.js',
  ],
  theme: {
    colors: {
      black: '#242424',
      gray: {
        900: '#111827',
        800: '#1F2937',
        700: '#374151',
        600: '#4B5563',
        500: '#6B7280',
        400: '#9CA3AF',
        300: '#D1D5DB',
        200: '#E5E7EB',
        100: '#F3F4F6',
        50: '#F9FAFB',
      },
      green: {
        500: '#42b883',
        700: '#33a06f',
        800: '#295f47',
      },
      red: {
        500: '#EF4444',
      },
      transparent: 'transparent',
      white: ' #fff',
      current: 'currentColor',
    },
    extend: {
      animation: {
        blink: 'blink 1s infinite',
        fadeIn: 'fadeIn .5s',
        fadeLeft: 'fadeLeft .5s',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '16/9': '16 / 9',
        '21/9': '21 / 9',
      },
      keyframes: {
        blink: {
          '0%': {
            borderColor: 'transparent',
          },
          '45%': {
            borderColor: 'transparent',
          },
          '50%': {
            borderColor: '#9CA3AF',
          },
          '100%': {
            borderColor: '#9CA3AF',
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        fadeLeft: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(-1rem, 0, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
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
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray.700'),
            '--tw-prose-headings': theme('colors.gray.800'),
            '--tw-prose-pre-bg': theme('colors.black'),
            '--tw-prose-quotes': theme('colors.gray.800'),
            '--tw-prose-quote-borders': theme('colors.gray.200'),
            fontFamily: 'inherit',
            color: theme('colors.gray.700'),
            h1: {
              marginBottom: theme('margin.2'),
            },
            h2: {
              marginTop: theme('margin.8'),
              marginBottom: theme('margin.4'),
            },
            h3: {
              marginTop: theme('margin.6'),
              fontWeight: theme('fontWeight.semibold'),
              '@media screen(md)': {
                marginTop: theme('margin.6'),
              },
              marginBottom: theme('margin.4'),
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-invert-pre-bg': 'rgb(255 255 255 / .04)',
            '--tw-prose-quotes': theme('colors.gray.400'),
            '--tw-prose-invert-quote-borders': theme('colors.gray.600'),
            color: theme('colors.gray.400'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    ({ matchUtilities, theme }) => {
      matchUtilities(
        {
          aspect: (value) => ({
            '@supports (aspect-ratio: 1 / 1)': {
              aspectRatio: value,
            },
            '@supports not (aspect-ratio: 1 / 1)': {
              '&::before': {
                content: '""',
                float: 'left',
                paddingTop: `calc(100% / (${value}))`,
              },
              '&::after': {
                clear: 'left',
                content: '""',
                display: 'block',
              },
            },
          }),
        },
        { values: theme('aspectRatio') },
      );
    },
  ],
  corePlugins: {
    accentColors: false,
    aspectRatio: false,
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
    backgroundAttachment: false,
    backgroundBlendMode: false,
    backgroundClip: false,
    backgroundOpacity: true,
    backgroundOrigin: false,
    blur: false,
    borderCollapse: false,
    borderSpacing: false,
    boxDecorationBreak: false,
    breakAfter: false,
    breakBefore: false,
    breakInside: false,
    brightness: false,
    caretColor: false,
    clear: false,
    columns: false,
    container: false,
    contrast: false,
    dropShadow: false,
    filter: false,
    float: false,
    fontSmoothing: false,
    fontVariantNumeric: false,
    grayscale: false,
    hueRotate: false,
    invert: false,
    isolation: false,
    outlineOffset: false,
    placeContent: false,
    placeItems: false,
    placeSelf: false,
    placeholderOpacity: false,
    resize: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringOpacity: false,
    saturate: false,
    scrollBehavior: false,
    scrollMargin: false,
    scrollPadding: false,
    scrollSnapAlign: false,
    scrollSnapStop: false,
    scrollSnapType: false,
    sepia: false,
    skew: false,
    strokeWidth: false,
    tableLayout: false,
    textDecorationColor: false,
    textDecorationStyle: false,
    textDecorationThickness: false,
    textIndent: false,
    textOpacity: false,
    textUnderlineOffset: false,
    touchAction: false,
    willChange: false,
  },
};
