/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '800px',
      'mid-lg': '1000px',
      'lg': '1200px',
      'xl': '1360px',
      '2xl': '1600px',
    },
    extend: {
      fontFamily:
      {
        Fraunce: ['Fraunces', 'serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Bitter: ['Bitter', 'sans-serif'],
        Lora: ['Lora', 'serif']
      },
    },
  },
  plugins: [require("daisyui")],
}