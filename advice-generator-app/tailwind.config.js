/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {
        'patternDividerIcon': 'url("./src/assets/images/pattern-divider-mobile.svg")'
      }
    },
  },
  plugins: [],
}

