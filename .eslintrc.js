module.exports = {
  env: {
    es6: true,
  },
  extends: ['prettier', 'airbnb', 'prettier/react'],
  globals: {
    __DEV__: 'readonly',
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'comma-dangle': 'off',
    'react/state-in-constructor': 'off',
    'arrow-parens': 'off',
    'react/sort-comp': 'off',
    'react/static-property-placement': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off'
  },
};
