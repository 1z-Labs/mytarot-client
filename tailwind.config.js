/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'resultBg': '#FFF6F7',
        'chapterTitle': '#121212',
        'primary': '#1E2352',
      },
      fontFamily: {
        sans: ['SUIT', 'sans-serif'], // 기본 폰트를 SUIT로 설정
      },
    },
    plugins: [],
  }
}

