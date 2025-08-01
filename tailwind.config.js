/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '335px',
        'xxxs': '252px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

