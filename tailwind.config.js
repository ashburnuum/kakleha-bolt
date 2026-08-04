/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kakleha: {
          red: '#B4232F',
          burgundy: '#731923',
          blush: '#F8EDEE',
          cream: '#FFF9F5',
          sand: '#EFE3DA',
          charcoal: '#262326',
          grey: '#746E72',
          success: '#2E7D5B',
          warning: '#D97706',
        },
      },
      fontFamily: {
        heading: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '28px',
      },
    },
  },
  plugins: [],
};
