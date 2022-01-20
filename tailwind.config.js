module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#10002B',
        pink: '#F72585',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
