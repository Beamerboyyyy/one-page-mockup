/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    // colors: {
    //   // 'custom-cyan': '#0e7490',
    // },
    extend: {
      colors: {
        'customBlue': '#e1e6e9',
        'customDarkBlue':'#17262f',
        'customCyan':'#41bdac'
      },
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 2s ease-out 1s 5 normal both',
        'type-reverse': 'type 2s ease-out 0s infinite alternate-reverse both',
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 30%': { width: '3ch' },
          '35%, 40%': { width: '4ch' },
          '45%, 50%': { width: '5ch' },
          '55%, 60%': { width: '6ch' },
          '65%, 70%': { width: '7ch' },
          '75%, 80%': { width: '8ch' },
          '85%, 90%': { width: '9ch' },
          '95%': { width: '10ch' },
        },
      },
      fontFamily:{
        Poppins: "Poppins",
        Manrope: "Manrope",

      }

    },
  },
  plugins: [
    require('tailwind-scrollbar'),
],
variants: {
  scrollbar: ['dark'],
}
}
