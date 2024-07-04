import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {},
      fontFamily: {
        ubuntu: ["Ubuntu", 'sans-serif'],
      },
      colors: {
        'CREMA': {
          DEFAULT: '#f1e1cf',
          dark: '#ab9f92',
        },
        'AMARILLO': {
          light: '#ffdd8b',
          DEFAULT: '#ffcc50',
          dark: '#cca340',
        },
        'AZUL': {
          light: '#89c4f3',
          DEFAULT: '#2196f3',
          dark: '#145c96',
        },

        // Dark
        'DARK-BG': {
          light: '#18263E',
          DEFAULT: '#0E192B',
          dark: '#060e1c',
        },
        'DARK-BORDER': {
          light: '#637591',
          DEFAULT: '#50617C',
          dark: '#3F4F6A',
        },

        //Light 
        'LIGHT-BG': {
          light: '#FAFCFF',
          DEFAULT: '#F5FAFF',
          dark: '#EBF1FB',
        },
        'LIGHT-T': {
          light: '#D8E2F3',
          DEFAULT: '#55657E',
          dark: '#16202F',
        },
        'LIGHTtt': {
          AzulClaro: '#55657E',
          AzulOscuro: '#16202F',

          GrisClaro: '#62636C',
          GrisOscuro: '#1E1F24',
        },

        "lightt": {
          primary: '#2196f3',
          secondary: '#ffcc50',
          background: '#F5FAFF',
          text: '#55657E',
          border: '#50617C',
          accent1: '#FAFCFF',
          accent2: '#EBF1FB',
          accent3: '#D8E2F3',
        },

        "dark": {
          primary: {
            light: '#cca340',
            DEFAULT: '#ffcc50',
            dark: "#cca340",
          },
          secondary: {
            light: '#89c4f3',
            DEFAULT: '#2196f3',
            dark: '#145c96',
          },
          background: {
            DEFAULT: "#060e1c",
            light: "#0e192b"
          },
          text: {
            DEFAULT: '#f1e1cf',
            dark: '#ab9f92',
          },
          border: {
            light: '#637591',
            DEFAULT: '#50617C',
            dark: '#3F4F6A',
          },
          accent1: '#18263E',
          accent2: '#060e1c',
          accent3: '#637591',
          primaryOpacity: "#f1e1cf23",
        },

        "light": {
          primary: {
            light: '#89c4f3',
            DEFAULT: '#2196f3',
            dark: '#145c96',
          },
          secondary: {
            light: '#ffdd8b', // Ajusta el color según tus necesidades
            DEFAULT: '#145c96',
            dark: '#cca340',
          },
          background: {
            light: '#FAFCFF',
            DEFAULT: '#F5FAFF',
          },
          text: {
            light: '#55657E',
            DEFAULT: '#55657E',
            dark: '#16202F',
          },
          border: {
            light: '#637591',
            DEFAULT: '#50617C',
            dark: '#3F4F6A',
          },
          accent1: '#18263E',
          accent2: '#060e1c',
          accent3: '#637591',
          colorOpacity: "#2195f323",
        },

      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          // Variables para tema Light
          '--color-light-primary-light': theme('colors.light.primary.light'),
          '--color-light-primary': theme('colors.light.primary.DEFAULT'),
          '--color-light-primary-dark': theme('colors.light.primary.dark'),
          '--color-light-secondary-light': theme('colors.light.secondary.light'),
          '--color-light-secondary': theme('colors.light.secondary.DEFAULT'),
          '--color-light-secondary-dark': theme('colors.light.secondary.dark'),
          '--color-light-background-light': theme('colors.light.background.light'),
          '--color-light-background': theme('colors.light.background.DEFAULT'),
          '--color-light-text-light': theme('colors.light.text.light'),
          '--color-light-text': theme('colors.light.text.DEFAULT'),
          '--color-light-text-dark': theme('colors.light.text.dark'),
          '--color-light-border-light': theme('colors.light.border.light'),
          '--color-light-border': theme('colors.light.border.DEFAULT'),
          '--color-light-border-dark': theme('colors.light.border.dark'),
          '--color-light-accent1': theme('colors.light.accent1'),
          '--color-light-accent2': theme('colors.light.accent2'),
          '--color-light-accent3': theme('colors.light.accent3'),
          '--color-light-colorOpacity': theme('colors.light.colorOpacity'),

          // Variables para tema Dark
          '--color-dark-primary': theme('colors.dark.primary.DEFAULT'),
          '--color-dark-primary-dark': theme('colors.dark.primary.dark'),
          '--color-dark-secondary-light': theme('colors.dark.secondary.light'),
          '--color-dark-secondary': theme('colors.dark.secondary.DEFAULT'),
          '--color-dark-secondary-dark': theme('colors.dark.secondary.dark'),
          '--color-dark-background': theme('colors.dark.background.DEFAULT'),
          '--color-dark-background-light': theme('colors.dark.background.light'),
          '--color-dark-text': theme('colors.dark.text.DEFAULT'),
          '--color-dark-text-dark': theme('colors.dark.text.dark'),
          '--color-dark-border-light': theme('colors.dark.border.light'),
          '--color-dark-border': theme('colors.dark.border.DEFAULT'),
          '--color-dark-border-dark': theme('colors.dark.border.dark'),
          '--color-dark-accent1': theme('colors.dark.accent1'),
          '--color-dark-accent2': theme('colors.dark.accent2'),
          '--color-dark-accent3': theme('colors.dark.accent3'),
          '--color-dark-colorOpacity': theme('colors.dark.colorOpacity'),

        },
      });
    },
  ],
};

export default config;
