/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-315': 'linear-gradient(315deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%)',
        'gradient-opacity': 'linear-gradient(315deg, hsla(216, 95%, 92%, .25) 0%, hsla(184, 95%, 92%, .25) 100%)'
      }
    },
    colors: {
      white: '#ffffff',
      blue: '#345ff6',
      gunMetal: '#253347',
      darkElectricBlue: '#5E6E85',
      borders: '#D8E2E7'
    }
  },
  plugins: [],
}