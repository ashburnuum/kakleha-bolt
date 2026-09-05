/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ms: {
          gold: '#C2B067',
          'gold-dark': '#A89A55',
          'gold-light': '#D4C57E',
          'gold-pale': '#EDE5C8',
          champagne: '#F5F0E3',
          ivory: '#FDFAF3',
          cream: '#FBF7EE',
          charcoal: '#2C2C2C',
          'charcoal-light': '#4A4A4A',
          grey: '#6B6B6B',
          'grey-light': '#9A9A9A',
          'grey-muted': '#B8B8B8',
          taupe: '#8B7D6B',
          sand: '#D4C5A9',
          white: '#FFFFFF',
          success: '#2E7D5B',
          error: '#C0392B',
          warning: '#D4A017',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '28px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
