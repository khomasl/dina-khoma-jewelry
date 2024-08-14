/** @type {import('tailwindcss').Config} */
// import typography from '@tailwindcss/typography';

module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'violet': {
          300: '#74538E',
          400: '#74538E',
          500: '#6A00A6'
        },
        'brown': '#603813',
        'gray': {
          50:  '#FEFEFE',
          400: '#A49898',
          800: '#120021',
          900: '#011110'
        },

      },
      screens: {
        'ss':  '375px',
        'sx':  '480px',
        'sm':  '640px',
        'md':  '768px',
        'lg':  '1024px',
        'xl':  '1280px',
        '2xl': '1340px',
      }
    }
  },
  // plugins: [
  //   typography,
  // ],
}