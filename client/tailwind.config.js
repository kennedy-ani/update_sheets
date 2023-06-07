/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'columbiaBlue': '#B9D6F2',
        'oxford': '#061A40',
        'sapphire': '#0353A4',
        'lightgreen': '#ADFC92',
        'orange': '#FF7D00',
        'white': '#FFF',
        'red': '#FA5F55'
      }
    },
  },
  plugins: [],
}