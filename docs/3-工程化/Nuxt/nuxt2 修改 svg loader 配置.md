# nuxt2 修改svg loader 配置

## 第一步

在nuxt.config.js 修改build.extend 扩展，也就是修改webpack 配置，找到解析 svg 的loader，然后修改loader的正则表达式，去掉匹配的部分

```js
 const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))
 svgRule.test = /\.(png|jpe?g|gif|webp|avif)$/i // 原来是包含svg的
```
## 第二步
新增rule ，用来解析svg 文件
```js
config.module.rules.push({
   test: /\.svg$/, // 匹配.svg
   use: [
     { loader: 'babel-loader' },
     { loader: 'vue-svg-loader' }
   ]
 })
```
这样以后，解析svg文件的方式就被改变了