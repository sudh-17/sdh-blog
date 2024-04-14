# vue2 配置文件中增加  自定义webpack 插件

## 1. 创建插件my-plugin.js
```js
class MyPlugin {
  constructor (options) {
    this.opts = options
  }
  apply (compiler) {
    let _this = this
    console.log('***********我的插件**************')
  }
}
module.exports = MyPlugin
```

## 2. 在vue.config.js 中增加插件
在配置文件中属性configureWebpack.plugins 添加MyPlugin 插件
```js
const { defineConfig } = require('@vue/cli-service')
const MyPlugin = require('./my-plugin')

module.exports = defineConfig({
  // 此处省略一万行代码 ...
  configureWebpack: {
    plugins: [
      new MyPlugin()
    ]
  }
  // ...
})

```