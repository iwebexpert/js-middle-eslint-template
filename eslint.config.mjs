import js from '@eslint/js'
import globals from 'globals'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tsEslint from 'typescript-eslint'

export default tsEslint.config([
  { ignores: ['dist', 'help', '**/*.cjs'] },
  {
    extends: [
      js.configs.recommended,
      eslintPluginUnicorn.configs['flat/recommended'],
      ...tsEslint.configs.recommended,
      prettierConfig,
    ],
    files: ['**/*.{js,jsx,ts,tsx,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      // sourceType: 'module',
      globals: globals.browser,
      // globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',
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
])
