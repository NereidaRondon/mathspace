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
      },
      backgroundImage: {
        'mygradient': 'radial-gradient(circle at 50% 50%, #81e9e2, #78e1dd, #6fdad8, #67d3d2, #5ecbcd, #55c4c8, #4cbcc3, #42b5bd, #39aeb8, #2ea6b3, #229fad, #1398a8)'
      },
      lineHeight: {
        '20': '4rem'
      },
    },
    plugins: [],
  }
}
