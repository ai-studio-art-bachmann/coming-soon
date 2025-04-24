/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'float-medium': 'float 10s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  safelist: [
    'visible',
    'opacity-0',
    'opacity-100',
    'translate-y-8',
    'delay-100',
    'delay-200',
    'delay-300',
    'delay-400',
    'delay-500',
  ],
};
