const clearConsolePlugin = require('@jomsou/babel-plugin-clear-log');

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    clearConsolePlugin
  ]
}
