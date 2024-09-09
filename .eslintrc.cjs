module.exports = {
  root: true,
  env: { browser: true, es2020: true }, // 브라우저 환경 및 es2020 환경 설정
  extends: [
    "eslint:recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module"
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"], // ESLint 무시할 파일 또는 디렉토리 설정
  plugins: [
    "react",
    "jsx-a11y",
    "react-hooks",
    "prettier",
    "react-refresh",
    "@typescript-eslint"
  ], // React Refresh 플러그인 사용
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ],
    "unused-imports/no-unused-imports": "off",

    indent: ["error", 2],
    "no-empty": "warn",
    semi: ["error", "always"]
  }
};
