module.exports = {
  plugins: [
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("postcss-partial-import"),
    require("postcss-preset-env")({
      stage: 3,
      features: {
        "nesting-rules": false
      }
    })
  ]
};
