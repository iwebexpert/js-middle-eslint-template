import js from '@eslint/js'
import globals from 'globals'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

/** @type { import("eslint").Linter.Config[] } */
export default [
  js.configs.recommended,
  eslintPluginUnicorn.configs['flat/recommended'],
  prettierConfig,
  { ignores: ['dist', 'help', 'webpack.config.js'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      // sourceType: 'module',
      globals: globals.browser,
      // globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      prettier: prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'no-console': [
        'error',
        {
          allow: ['info', 'error'],
        },
      ],
      'no-var': 'error',
      'no-use-before-define': 'error',
      eqeqeq: 'warn',
      camelcase: 'error',
      'unicorn/filename-case': 'off',
    },
  },
]
