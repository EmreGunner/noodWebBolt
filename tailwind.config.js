/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3d7a3f', // Darkened for better contrast
        secondary: '#6a9f5d', // Darkened for better contrast
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
