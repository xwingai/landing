module.exports = {
  purge: [
    './src/index.html',
  ],
  theme: {
    fill: theme => ({
      'white': theme('colors.white'),
      'gray-100': theme('colors.gray.100'),
      'initiative-orange': theme('colors.initiative-orange'),
    }),
    extend: {
      colors: {
        "initiative-orange": "#e77e29",
        "attack-red": "#ed3638",
        "hull-yellow": "#f0e531",
        "agility-green": "#6abe46",
        "shield-blue": "#82d1e1",
        "energy-pink": "#e71583",
        "stress-red": "#ec1f21",
        "destress-blue": "#1e90ff",
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: []
}
