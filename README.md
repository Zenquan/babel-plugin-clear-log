## clear-console-plugin

### 安装
```bash
npm i @jomsou/clear-console-plugin -D
```

### 使用

#### babel.config.js配置
```js
const clearConsolePlugin = require('@jomsou/clear-console-plugin')

module.exports = {
  "plugins": [
    clearConsolePlugin
  ]
}
```

#### webpack配置
```js
const clearConsolePlugin = require('@jomsou/clear-console-plugin')

rules: [
    {
      test: /\.js$/, use: {
      loader: 'babel-loader',
      options: {
        plugins: [
            clearConsolePlugin
        ]
      }
    }, exclude: /node_modules/}
  ]
}
```


更新日志：

- 2020.12.01 完成v1.0.0版本