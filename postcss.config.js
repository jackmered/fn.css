module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('postcss-calc'),
    require('postcss-custom-media'),
    require('css-mqpacker'),
    require('autoprefixer')(['> 5%', 'Last 8 versions', 'IE 9']),
    require('perfectionist')({
      cascade: false,
      indentSize: 2,
      trimLeadingZero: false,
      maxSelectorLength: 1,
    }),
  ],
}
