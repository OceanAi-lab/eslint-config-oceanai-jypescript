module.exports = {
  extends: ['eslint-config-oceanai', './base.js', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
};
