/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'saudi-green': {
          50: '#f0f9f7',
          100: '#dcf2ed',
          200: '#bce5db',
          300: '#8dd1c2',
          400: '#58b5a3',
          500: '#3e9b87',
          600: '#2f7d6e',
          700: '#286559',
          800: '#235148',
          900: '#1f433c',
          950: '#005430'
        },
        'saudi-secondary': {
          50: '#f6f9f7',
          100: '#e3f0e7',
          200: '#c8e1d0',
          300: '#9cc9ae',
          400: '#8baa99',
          500: '#5a8a6b',
          600: '#456c54',
          700: '#395645',
          800: '#2f4638',
          900: '#283a2f'
        }
      },
      fontFamily: {
        'arabic': ['DIN Next LT Arabic', 'Arial', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
} 