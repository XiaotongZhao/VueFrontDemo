module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'vuetify',
    '@vue/typescript',
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },

  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },

  plugins: [
    '@typescript-eslint/eslint-plugin',
  ],
}
