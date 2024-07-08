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
          colorOpacity: "#2195f318",
          primaryOpacity: "#2196f318"
        },

      },
    },
  },
  plugins: [
    addDynamicIconSelectors()
  ],
};

export default config;
