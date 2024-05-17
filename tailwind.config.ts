/** @type {import('tailwindcss').Config} */
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
        'brown': '#6038130',
        'gray': '#A49898',
      },
    }
  },
}