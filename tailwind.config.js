/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '20px',
        },
      },
      fontFamily: {
        roundedElegance: ['Rounded Elegance', 'sans-serif'],
      },
    },
  },
}
