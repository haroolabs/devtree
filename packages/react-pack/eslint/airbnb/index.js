module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/react',
    './rules/react-a11y',
    './rules/react-hooks.js',
  ].map(require.resolve),
  rules: {},
};
