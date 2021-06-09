module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    textDecoration: ['responsive', 'hover', 'focus', 'focus-visible'],
    translate: ['responsive', 'hover', 'focus', 'motion-safe'],
    extend: {},
  },
  plugins: [],
}
