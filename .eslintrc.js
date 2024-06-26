module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/essential', '@vue/prettier'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn'
  },

  // parserOptions: {
  //   parser: 'babel-eslint'
  // },

  // extends: ['plugin:vue/essential', '@vue/prettier', 'eslint:recommended']
}
