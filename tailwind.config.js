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
    },
  },
  plugins: [
    addDynamicIconSelectors()
  ],
};

export default config;
