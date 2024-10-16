/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4e9350',
        secondary: '#83bf75',
        background: '#e0e5ba',
        text: '#354b4e',
        accent: '#83bf75',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], // Placeholder for Scala Sans
      },
      screens: {
        'xs': '480px',
        // Other breakpoints remain default
      },
    },
  },
  plugins: [],
}
