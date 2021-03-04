## babel-plugin-clear-log

### 背景
因为平时调试都有很多的log和debugger，所以就会导致上线的时候控制台出现很多log，为了控制台的整洁，便于后续排查问题，以及免除手动清除控制台，所以便需要写一个在打包到正式环境时自动去除log的插件。

### 安装
```bash
npm i @jomsou/babel-plugin-clear-log -D
```
### 使用

### 插件选项

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| disable | <code>Boolean</code> | false | true为不起作用，false为起作用。 |

eg：
```js
module.exports = {
  presets: [
  ],
  plugins: [
    ["@jomsou/clear-log", {
      "disable": process.env.NODE_ENV === 'development'
    }]
  ]
}
```
```json
{
  "scripts": {
    "serve": "NODE_ENV=development vue-cli-service serve",
    "build": "NODE_ENV=production vue-cli-service build"
  },
}

```

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
- 2021.03.04 完成v1.1.0版本，新增传入是否作用的参数`disable`