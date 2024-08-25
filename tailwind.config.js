/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'hero-bg': '#ffffff', 
        'primary': '#0563bb',
        'secondary': '#f2f3f5',
        'accent': '#45505b',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      container: {
        screens: {
          'sm': '600px',
          'md': '728px',
          'lg': '984px',
          'xl': '1240px',
          '2xl': '1400px',
        },
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '4rem',
          lg: '6rem',
          xl: '8rem',
          '2xl': '10rem',
        },
      },
      fontSize: {
        'hero-heading': ['64px', { lineHeight: '56px' }],
        'hero-paragraph': ['26px', { lineHeight: '1.5' }],
      },
      spacing: {
        'hero-padding': '160px', 
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('@tailwindcss/typography'), 
    require('@tailwindcss/aspect-ratio'), 
  ],
}
