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
            first: "#ffcc50",
            second: '#ffd750',
            third: "#cca340",
          },
          secondary: {
            DEFAULT: "#2196f3",
          },
          border: {
            first: "#ffd750",
            second: "#2196f3",
          },
          text: {
            first: "#f1e1cf",
            second: "#fffaf4",
            third: "#f1e1cf"
          },
          background: {
            first: "#0c1523",
            second: "#122138",
            third: "#1f2937",
            fourth: "#060e1c"
          },
          error: {
            text: "#f2634a"
          },
          form: {
            background: {
              one: "#374151",
              two: "#4b5563",
              three: "#9ca3af",
            },
            button: {
              background: "#ffcc50",
              text: "#000000",
              hover: "#cca340",
              sent: "#22c55e",
            },
            placeholder: "#9ca3af",
          },
          colorOpacity: "#f1e1cf18",
          primaryOpacity: "#ffcc5018"
        },

        "light": {
          primary: {
            first: "#2196f3",
            second: '#89c4f3',
            third: "#0d3c63",
          },
          secondary: {
            DEFAULT: "#145c96",
          },
          border: {
            first: "#0d3c63",
            second: "#2196f3",
          },
          text: {
            first: "#16202f",
            second: "#314567",
            third: "#f5faff"
          },
          background: {
            first: "#ecf4fd",
            second: "#f5faff",
            third: "#d6e7fa",
            fourth: "#060e1c"
          },
          error: {
            text: "#ef4444"
          },
          form: {
            background: {
              one: "#f9fafb",
              two: "#e5e7eb",
              three: "#6b7280",
            },
            button: {
              background: "#2196f3",
              text: "#ffffff",
              hover: "#89c4f3",
              sent: "#22c55e",
            },
            placeholder: "#9ca3af",
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
