//postcss.config.js
 const tailwindcss = require('tailwindcss');
 module.exports = {
     plugins: [
         tailwindcss('./tailwind.tsx'),
         require('autoprefixer'),
     ],
 };