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
            extraLight: "#ffdd8b",
            light: '#ffd750',
            DEFAULT: "#ffcc50",
            dark: "#cca340",
          },
          secondary: {
            light: '#89c4f3',
            DEFAULT: '#2196f3',
            dark: '#145c96',
            both: "#2196f3"
          },
          background: {
            extraLight: "#374151",
            light: "#0e192b",
            DEFAULT: "#1f2937",
            dark: "#0c1523",
            both: "#060e1c",
          },
          text: {
            light: '#fffaf4',
            DEFAULT: '#f1e1cf',
            dark: '#e2ceb8',
            both: "#f1e1cf",
            complementary: "#ffcc50",
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
            extraLight: "#c7e5fd",
            light: '#89c4f3',
            DEFAULT: '#2196f3',
            dark: '#145c96',
          },
          secondary: {
            light: '#125389',
            DEFAULT: '#145c96',
            dark: '#0d3c63',
            both: "#2196f3"
          },
          background: {
            extraLight: "#f5faff",
            light: '#f5faff',
            DEFAULT: '#d6e7fa',
            dark: '#ecf4fd',
            both: "#060e1c",
          },
          text: {
            light: '#314567',
            DEFAULT: '#16202f',
            dark: '#060e1c',
            both: "#f1e1cf",
            complementary: "#145c96",
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
