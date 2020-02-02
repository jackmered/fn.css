module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-at-rules-variables'),
    require('postcss-each'),
    require('postcss-conditionals'),
    require('postcss-css-variables')({ preserve: true }),
    require('postcss-custom-media'),
    require('postcss-nested'),
    require('postcss-remove-media-query-ranges')({
      min: 0,
      removeMin: true,
    }),
    require('postcss-selector-replace')({
      before: ['.xs-'],
      after: ['.'],
    }),
    require('css-mqpacker'),
    require('postcss-discard-comments'),
    require('perfectionist')({
      cascade: false,
      indentSize: 2,
      trimLeadingZero: false,
      maxSelectorLength: 1,
    }),
  ],
};
