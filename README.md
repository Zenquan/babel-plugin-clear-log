## babel-plugin-clear-log
![](https://img.shields.io/badge/version-1.2.0-orange)
### 背景
因为平时调试都有很多的log和debugger，所以就会导致上线的时候控制台出现很多log，为了控制台的整洁，便于后续排查问题，以及免除手动清除控制台，所以便需要写一个在打包到正式环境时自动去除log的插件。

### 特性
- 可去除不包含`/err/`正则的console.log

### 安装
```bash
npm i @jomsou/babel-plugin-clear-log -D
```
### 使用

### 插件选项

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| disable | <code>Boolean</code> | false | true为不起作用，false为起作用。 |


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
    ["@jomsou/clear-log", {
      "disable": process.env.NODE_ENV === 'development'
    }]
  ]
}
```
#### babel.config.js配置
```js
const clearConsolePlugin = require('@jomsou/babel-plugin-clear-log')

module.exports = {
  "plugins": [
    ["@jomsou/clear-log", {
      "disable": process.env.NODE_ENV === 'development'
    }]
}
```

#### webpack配置
```js

rules: [
    {
      test: /\.js$/, use: {
      loader: 'babel-loader',
      options: {
        plugins: [
            ["@jomsou/clear-log", {
              "disable": process.env.NODE_ENV === 'development'
            }]
        ]
      }
    }, exclude: /node_modules/}
  ]
}
```
**备注**
当console出现在try...catch...的catch中，使用console.log('err', err)等包含`/err/`正则的写法，console.log不会被清除。

更新日志：

- 2020.12.01 完成v1.0.0版本
- 2020.12.05 增加vue、react项目中使用实例
- 2021.01.14 修复在.babelrc使用失败的问题
- 2021.03.04 完成v1.1.0版本，新增传入是否作用的参数`disable`
- 2021.07.01 完成v1.2.0版本，新增以上备注的点
