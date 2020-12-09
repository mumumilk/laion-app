module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./pages/**/*.vue', './components/**/*.vue'],
  theme: {
    extend: {
      colors: {
        dark: '#141516',
        darker: '#0e0e0f',
      },
      animation: {
        bouncy: 'bouncy 4s linear infinite',
      },
      keyframes: {
        bouncy: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
    },
    fontFamily: {
      sans: ['Heebo'],
    },
  },
  variants: {
    extend: {
      boxShadow: ['active'],
      backgroundColor: ['active'],
      translate: ['active'],
    },
  },
  plugins: [],
}
