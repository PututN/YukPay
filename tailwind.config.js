/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    colors: {
      // ...
      'primary': {
        DEFAULT: '#7DE5ED',
      },
      'secondary' : {
        DEFAULT : '#81C6E8'
      },
      'third' : {
        DEFAULT : '#5DA7DB'
      },
      'tersier' : {
        DEFAULT :'#5837D0'
      }
      // ...
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
