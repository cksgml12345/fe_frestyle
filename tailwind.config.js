// tailwind.config.js
const colors = require('./src/style/colors.js');
const theme = require('./src/style/theme.js');

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: colors,
      ...theme, // fontFamily, spacing 등 커스터마이징
    },
  },
  plugins: [],
};
