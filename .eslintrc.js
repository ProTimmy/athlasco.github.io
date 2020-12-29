module.exports = {
  extends: ['airbnb-base', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  rules: {
    'no-use-before-define': ['error', { variables: false }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
