const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#55D7FF',

        'black': '#010714',
        'gray': {
          '200': '#D4E0E5',
          '300': '#B1BFC4',
          '500': '#768589',
          '600': '#59686C',
          '700': '#3B4B4F',
        },
        'white': '#EFF9FE',
      },
      fontFamily: {
        primary: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
