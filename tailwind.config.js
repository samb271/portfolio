/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  content: [ 
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      paraboleText: ["Parabole Text", "sans-serif"],
      paraboleDisplay: ["Parabole Display", "sans-serif"],
    },
    extend: {},
    colors: {
      ...colors,
      text: {
        'primary': '#FFFFFF',
        'secondary': '#D0D0D0'
      },
      navbar: {
        'text': '#000000',
        'background': '#D9D9D9',
        'textSelected': '#FFFFFF',
        'contrast': '#000000'
      },
      'background': '#334155',
      'titlePill': '#5DA432'
    }
  },
  plugins: [],
}
