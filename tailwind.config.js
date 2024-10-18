/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#4e9350',
        secondary: '#83bf75',
        background: '#f4f4f4',
        text: '#1D344B',
        accent: '#C44EFF',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['FF Real Head Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
