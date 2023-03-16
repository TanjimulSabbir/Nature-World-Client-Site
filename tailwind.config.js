/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",

  ],

  theme: {
    screens: {
      'sm': '500px',
      'md': '760px',
      'mid-lg': '1000px',
      'lg': '1300px',
      'xl': '1500px',
      '2xl': '1800px',
    },
    extend: {
      backgroundImage: {
        "bg-leaf": "url('/src/Pages/Home/Banner01/Image/flower-bg.png')"
      },
      scale: {
        '-100': '-1',
      },

      fontFamily:
      {
        Fraunce: ['Fraunces', 'serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Bitter: ['Bitter', 'sans-serif'],
        Lora: ['Lora', 'serif']
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light", "black"],
  },
}