/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '922px',
        xl: '1200px',
        '2xl': '1400px'
      },
    },
  },
  plugins: [],
}