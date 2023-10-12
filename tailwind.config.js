/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px'
    },
   
    fontFamily: {
      sans: ['Barlow Semi Condensed', 'sans-serif'],
      
    },
    extend: {},
  },
  plugins: [],
}