module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-at-rules-variables"),
    require("postcss-each"),
    require("postcss-conditionals"),
    require("postcss-css-variables")({ preserve: true }),
    require("postcss-custom-media"),
    require("postcss-nested"),
    require("perfectionist")({
      cascade: false,
      indentSize: 2,
      trimLeadingZero: false,
      maxSelectorLength: 1
    })
  ]
};
