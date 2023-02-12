module.exports = {
  env: {
    browser: true,
    node: false
  },
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'prettier'
  ],
  globals: {},
  overrides: [],
  parser: '',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  ignorePatterns: [
    '.eslintrc.js',
    'prettier.config.js'
  ],
  plugins: [
    'unicorn',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'no-console': [
      'error',
      {
        allow: [
          'info',
          'error'
        ]
      }
    ],
    'no-var': 'error',
    'no-use-before-define': 'error',
    eqeqeq: 'warn',
    camelcase: 'error',
    'unicorn/filename-case': 'off'
  }
}