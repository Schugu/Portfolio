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

        "dark": {
          primary: {
            light: '#cca340',
            DEFAULT: "#ffcc50",
            dark: "#cca340",
          },
          secondary: {
            light: '#89c4f3',
            DEFAULT: '#2196f3',
            dark: '#145c96',
          },
          background: {
            light: "#0e192b",
            DEFAULT: "#1f2937",
            dark: "#0c1523",
            both: "#060e1c",
          },
          text: {
            light: '#f5eadc',
            DEFAULT: '#f1e1cf',
            dark: '#ab9f92',
            both: "#f1e1cf"
          },
          border: {
            light: '#637591',
            DEFAULT: '#ffcc50',
            dark: '#3F4F6A',
            complementary: "#2196f3"
          },
          accent1: '#18263E',
          accent2: '#060e1c',
          accent3: '#637591',
          colorOpacity: "#f1e1cf18",
          primaryOpacity: "#ffcc5018"
        },

        "light": {
          primary: {
            light: '#89c4f3',
            DEFAULT: '#2196f3',
            dark: '#145c96',
          },
          secondary: {
            light: '#125389',
            DEFAULT: '#145c96',
            dark: '#0d3c63',
          },
          background: {
            light: '#f5faff',
            DEFAULT: '#d6e7fa',
            dark: '#ecf4fd',
            both: "#060e1c",
          },
          text: {
            light: '#314567',
            DEFAULT: '#16202f', 
            dark: '#060e1c',
            both: "#f1e1cf"
          },
          border: {
            light: '#637591',
            DEFAULT: '#145c96',
            dark: '#3F4F6A',
            complementary: "#145c96"
          },
          accent1: '#18263E',
          accent2: '#060e1c',
          accent3: '#637591',
          colorOpacity: "#2195f318",
          primaryOpacity: "#2196f318"
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
          '--color-dark-background-dark': theme('colors.dark.background.dark'),
          '--color-dark-text': theme('colors.dark.text.DEFAULT'),
          '--color-dark-text-dark': theme('colors.dark.text.dark'),
          '--color-dark-text-light': theme('colors.dark.text.light'),
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
