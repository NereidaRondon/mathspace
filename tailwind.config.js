/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '3px 4px 3px rgba(0, 0, 0, 0.7)',
        '4xl': '1px 1px 3px rgb(0, 0, 0)',
        '5xl': '5px 3px 2px rgba(0, 71, 212)',
      },
      fontFamily: {
        'gugi': ['Gugi', 'sans-serif'],
        'quicksand':['Quicksand', 'sans-serif']
      }

    },
  },
  plugins: [],
}

