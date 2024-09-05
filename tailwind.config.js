/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'resultBg' : '#FFF6F7',
        'chapterTitle' : '#121212'
      colors: {
        primary: '#1E2352',
      }
    },
  },
  plugins: [],
}

