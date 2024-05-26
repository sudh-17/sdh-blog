# 技术栈路线
## 一、前端
### 1、前端基础
#### HTML
+ 知识点
#### CSS
+ 知识点
#### JS
+ 变量与作用域
+ 原型/原型链
+ 执行上下文
+ 作用域/作用域链
+ 面向对象
+ 异步编程
#### 浏览器端编程
+ BOM
+ DOM
+ 事件
### 2、常用框架与库
#### 框架
+ Vue全家桶
+ React全家桶
#### 工具库
+ axios
+ lodash
+ mockjs
+ moment
### 3、工程化
#### 模块化
+ CommonJS模块
+ AMD规范
+ CMD规范
+ ES规范
#### 包管理器
+ npm
+ yarn
+ pnpm
#### 构建工具
+ webpack
+ rollup
+ vite
#### 工具链
+ CSS工具链
+ JS工具链
### 4、浏览器
#### 浏览器组成部分
#### 渲染机制
#### 跨标签页通信
#### 跨域：同源策略
+ 1. 浏览器 对 node（同域），node 对 其他服务（服务对服务不会有跨域问题）。 （根本上解决跨域问题）
+ 2. Cross-Origin: Resource Sharing.   服务器设置 Access-Control-Allow-Origin 白名单。
+ 3. jsonp 只支持get。通过 callback。
+ 4. document.domain iframe 跨子域
+ 5. html5 postMessage
+ 6. form target 指向 iframe
+ 7. nodejs 收拢所有请求，服务对服务。
### 5、移动端
#### ReactNative
#### WebApp
+ 移动端适配
+ 响应式设计
+ 移动端事件
#### UniAPP
### 6、桌面端
#### Electron
#### Tauri
### 7、性能优化
#### 访问优化
+ 1. 首屏服务器渲染，次屏幕浏览器渲染。
+ 2. 浏览器缓存，expires/cache-control:max-age -> etag/if-none-match -> last-modified/if-modified-since。
+ 3. 服务器缓存，CDN。（确定，网站更新需要服务器强制更新CDN，或者加版本号。）memcache。redies 缓存。
+ 4. gzip 压缩功能，效果 70%。（原来 100 变 30）
+ 5. 减少 TCP 通道创建次数：keep-alive: true。
+ 6. http2.0, 并发传输。
+ 7. httpdns, 绕开 local-dns。
+ 8. pc 域名发散，移动端域名收敛。
#### 体验优化
+ 截流
+ 防抖
+ indexDB + webWorrker
# 
## 二、服务端
### 1、Node.js
#### 基础知识
+ Node.js特点
+ Node.js应用场景
+ Node.js模块机制
+ 标准库
+ 网络编程
#### 框架
+ express
+ koa2
+ egg.js
+ nest.js
### 2、Go
### 3、Java
## 三、存储
### 1、浏览器存储
#### LocalStorage
#### SessionStorage
#### WebSQL
#### IndexedDB
#### Cookie
### 2、服务端存储
#### 关系型数据库
+ MySQL
#### 非关系型数据库
+ MongoDB
## 四、研发与运维
### 1、git 分支管理
#### 描述 git-flow
### 2、CI/CD
### 3、docker
### 4、k8s
## 五、编程基础
### 1、数据结构与算法
### 2、设计模式
#### 设计原则
+ 单一职责原则
+ 接口隔离原则
+ 开放-封闭原则
#### 常见模式
+ 发布订阅模式
+ 单例模式
+ 工厂模式
+ 装饰者模式
+ 迭代模式
+ 适配器模式
+ ...
### 3、计算机网络
#### HTTP/HTTPS协议
+ 简述 HTTPS 流程，为什么安全？
+ 缓存
+ 请求方式
+ URL 组成
+ 请求头：Request Headers
+ 请求体：Request Body
+ 响应头：Response Headers
+ 响应状态码
#### 网络模型
+ TCP/IP四层模型
+ TCP/IP五层模型
+ OSI七层模型
#### 三次握手/四次挥手
#### 从URL输入到看到页面的全过层
#### 攻击（安全）
+ XSS
+ CSRF
+ DDOS