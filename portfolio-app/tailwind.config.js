/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          bg: '#F9F9F9',
          primary: '#575E70',
          'primary-dim': '#4B5264',
          'surface-low': '#F2F4F4',
          'surface-lowest': '#FFFFFF',
          text: '#2D3435',
          outline: 'rgba(172, 179, 180, 0.15)',
          variant: '#DDE4E5',
          'on-variant': '#596061',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
