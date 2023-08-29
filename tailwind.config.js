/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '3px 5px 5px rgba(0, 0, 0, 0.7)',
        '4xl': '5px 5px 2px rgba(3, 3, 141, 0.8)'
      }

    },
  },
  plugins: [],
}

