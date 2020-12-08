module.exports = {
  extends: ['airbnb-base', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
