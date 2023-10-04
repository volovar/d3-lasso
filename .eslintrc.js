/* eslint-env node */
module.exports = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018
  },
  plugins: ["prettier"],
  root: true,
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": ["error"],
    "max-len": ["warn", { code: 120, ignoreComments: true }],
    "no-unused-expressions": ["error", { allowTernary: true }],
    semi: ["error", "always"]
  }
};
