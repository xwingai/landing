module.exports = {
  purge: [
    './src/index.html',
  ],
  theme: {
    fill: theme => ({
      'gray-100': theme('colors.gray.100'),
    })
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: []
}
