const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#339AF0',
        black: '#1E1E1E',
        green: '#0BD800',
        red: '#D80000',
        blackSecondary : '#636363',
        whiteSecondary: '#F6F6F6',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        custom: '0px 3px 10px rgba(0, 0, 0, 0.1)'
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

