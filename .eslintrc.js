module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react/recommended",
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    "prettier/react",
  ],
  env:{
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  settings: { //自动发现React的版本，从而进行规范react代码
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  parserOptions: { //指定ESLint可以解析JSX语法，注：解析JSX并不代表能解析React.
    "ecmaVersion": 2020,
    "sourceType": 'module',
    "ecmaFeatures":{
      jsx:true
    }
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0,
    '@typescript-eslint/no-explicit-any': 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "prettier/prettier": ["error", {}],
    'react/display-name': 0,
  }
};