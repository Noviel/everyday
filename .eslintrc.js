module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier',
  ],
  settings: {},
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
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'disabled',
    '@typescript-eslint/no-empty-interface': 'disabled',
    '@typescript-eslint/no-var-requires': 'disabled',
  },
};
