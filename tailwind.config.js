/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors: {
        primary: '#022F2D',
        gold: '#D8C38A',
        cream: '#F7F3EB',
        dark: '#111111',
      },

    },
  },

  plugins: [],
}