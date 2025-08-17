const typographyPlugin = require('@tailwindcss/typography')
const defaultTheme = require('tailwindcss/defaultTheme')
const typographyStyles = require('./typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  plugins: [typographyPlugin],
  theme: {
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: typographyStyles,
    extend: {
      backgroundImage: {
        'light-pattern': "url('/images/light-background.png')",
        'dark-pattern': "url('/images/dark-background.png')",
        'light-nav-pattern': "url('/images/light-nav-background.jpg')",
        'dark-nav-pattern': "url('/images/dark-nav-background.jpg')",
      },
      fontFamily: {
        display: ['Quiet Sans', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'star-field-seamless': 'starFieldSeamless 120s linear infinite',
        'star-twinkle': 'starTwinkle 2s ease-in-out infinite',
        'star-twinkle-slow': 'starTwinkle 3s ease-in-out infinite',
      },
      keyframes: {
        starFieldSeamless: {
          '0%': { 
            transform: 'translateX(0) translateY(0)'
          },
          '100%': { 
            transform: 'translateX(50%) translateY(50%)'
          }
        },
        starTwinkle: {
          '0%, 100%': { 
            opacity: '0.2'
          },
          '50%': { 
            opacity: '1'
          },
        },
      },
    }
  },
}
