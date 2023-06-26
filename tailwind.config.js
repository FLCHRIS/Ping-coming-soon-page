/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        PaleBlue: 'hsl(223, 100%, 88%)',
        LightRed: 'hsl(354, 100%, 66%)',
        Blue: 'hsl(223, 87%, 63%)',
        BlueHover: 'rgba(78, 125, 242, .7)',
        Gray: 'hsl(0, 0%, 59%)',
        VeryDarkBlue: 'hsl(209, 33%, 12%)'
      }
    },
    fontFamily: {
      Franklin: ['Libre Franklin', 'sans-serif']
    }
  },
  plugins: []
}
