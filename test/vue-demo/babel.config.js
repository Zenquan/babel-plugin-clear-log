// const clearConsolePlugin = require('@jomsou/babel-plugin-clear-log');

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    ["@jomsou/clear-log", {
      "disable": process.env.NODE_ENV === 'development'
    }]
  ]
}
