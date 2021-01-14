## babel-plugin-clear-log

### 安装
```bash
npm i @jomsou/babel-plugin-clear-log -D
```

### 使用

### .babelrc中的配置
```js
{
  "plugins": [
    "@jomsou/clear-log"
  ]
}
```
#### babel.config.js配置
```js
const clearConsolePlugin = require('@jomsou/babel-plugin-clear-log')

module.exports = {
  "plugins": [
    clearConsolePlugin
  ]
}
```

#### webpack配置
```js
const clearConsolePlugin = require('@jomsou/babel-plugin-clear-log')

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
- 2020.12.05 增加vue、react项目中使用实例
- 2021.01.14 修复在.babelrc使用失败的问题