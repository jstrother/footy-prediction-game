module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'vue/html-self-closing': 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': 'off',
    'semi': 'off',
  }
}
