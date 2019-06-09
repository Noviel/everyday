module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    worker: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    extraFileExtensions: ['ts', 'tsx'],
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'disabled',
    '@typescript-eslint/no-empty-interface': 'disabled',
    '@typescript-eslint/no-object-literal-type-assertion': 'disabled',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/no-parameter-properties': 'disabled',
    '@typescript-eslint/no-var-requires': 'disabled',
    '@typescript-eslint/explicit-function-return-type': 'disabled',
    'no-console': 'warn',
  },
};