/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './resources/**/*.blade.php',
      './resources/**/*.js',
      './resources/**/*.vue',
      './resources/**/*.html'
    ],
    theme: {
      extend: {
        fontFamily: {
          playfair: ['"Playfair Display"', 'serif'],
          rajdhani: ['Rajdhani', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  