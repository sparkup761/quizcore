/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f7f7ff',
          100: '#ededff',
          200: '#d7d7ff',
          300: '#b5b5ff',
          400: '#8f8fff',
          500: '#6a67ff',
          600: '#5148ff',
          700: '#4233e6',
          800: '#3428b6',
          900: '#2d258f'
        }
      }
    }
  },
  plugins: []
}

