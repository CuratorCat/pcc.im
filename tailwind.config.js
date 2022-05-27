const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    // './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,css,scss}',
  ],
  // darkMode: 'class', // 'media' is the default, change to 'class' if you want to use dark mode in with class names
  theme: {
    extend: {
      fontFamily: {
        sans: ['como', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bg1: `#473A74`,
        bg2: `#251C45`,
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
