/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{html,ts}",
  './node_modules/tw-elements/dist/js/**/*.js',
  './views/**/*.{html,js}',
  './components/**/*.{html,js}',
  './index.html',
],
  theme: {

    fontFamily: {
      'opensans': ['Open Sans'],
      'robot': ['Roboto']
    },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
