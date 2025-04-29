/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4B91F7',
          DEFAULT: '#1E3A8A', // Dark blue
          dark: '#0F2557',
        },
        secondary: {
          light: '#F7DA4B',
          DEFAULT: '#C8A951', // Gold
          dark: '#A38A28',
        },
        masonic: {
          blue: '#1E3A8A',
          gold: '#C8A951',
          black: '#111827',
          white: '#F9FAFB',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}