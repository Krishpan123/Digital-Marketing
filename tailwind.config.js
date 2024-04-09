/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        'source-sans-3': ['"Source Sans Pro"', 'sans-serif'],
        verdina: ['Verdina', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        'noto-sans-bengali': ['Noto Sans Bengali', 'sans-serif'],
      },
      screens: {
        'xs': '350px', 
        'sm': '640px', 
         
      },
    },
  },
  plugins: [],


}



