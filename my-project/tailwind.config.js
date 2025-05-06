/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#baddfe',
          300: '#7cc1fd',
          400: '#3aa2fa',
          500: '#1484eb',
          600: '#0065d9',
          700: '#0051b0',
          800: '#004590',
          900: '#003976',
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease forwards',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}