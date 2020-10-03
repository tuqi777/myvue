module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential"
    // '@vue/airbnb',
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    indent: 0, //缩进风格
    "no-var": 2,
    "prefer-const": 0,
    "linebreak-style": [0, "error", "windows"],
    "no-console": 0
  }
};
