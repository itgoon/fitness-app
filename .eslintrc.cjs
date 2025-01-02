module.exports = {
  root: true,
  env: { browser: true, es2020: true }, // 브라우저 환경 및 es2020 환경 설정
  extends: [
    'eslint:recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'], // ESLint 무시할 파일 또는 디렉토리 설정
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
    'prettier',
    'react-refresh',
    '@typescript-eslint',
    'unused-imports'
  ], // React Refresh 플러그인 사용
  rules: {
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    'unused-imports/no-unused-imports': 'error',
    'react/jsx-filename-extension': 'off',
    'no-param-reassign': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/order': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@mui/*/*/*', '!@mui/material/test-utils/*']
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    // "@typescript-eslint/no-unused-vars": [
    //   "error",
    //   {
    //     "vars": "all",
    //     "args": "none"
    //   }
    // ],
    'prettier/prettier': [
      'warn',
      {
        bracketSpacing: true,
        printWidth: 240,
        singleQuote: true,
        trailingComma: 'none',
        tabWidth: 2,
        useTabs: false
        // endOfLine: 'auto'
      }
    ],
    'prettier/prettier': 'off'
  }
};
