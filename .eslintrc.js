module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: 'vuetify',

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },

  parserOptions: {
    "ecmaVersion": 7,
    "sourceType": "module",
    parser: '@typescript-eslint/eslint-plugin',
  },

  "plugins": [
    '@typescript-eslint/eslint-plugin'
  ],

  'extends': [
    '@vue/typescript'
  ]
}
