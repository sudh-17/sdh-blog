# Vite 对 CommonJS 和 ESM 的依赖处理及依赖缓存

**Vite 对模块的处理方式**

默认情况下，Vite 只支持 ESM（ECMAScript Module）规范。当我们尝试使用 CommonJS 规范来导出或导入模块时，比如：

```js
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const type = 'fish';
const swim = () => 'fish swim';

var fish = {
  type,
  swim,
};

exports.default = fish;
exports.swim = swim;
exports.type = type;
```

通常会遇到如下错误：

```bash
Uncaught SyntaxError: The requested module '/@fs/C:/D/workspace/vscode/learn/模块化/vite-cjs_esm-demo/packages/dog/bundle.js' does not provide an export named 'default' (at main.js:1:8)
```

这是因为 Vite 默认将模块代码当作 ESM 规范来处理。如果没有插件去处理 CommonJS 规范的模块，Vite 就无法识别它们，从而导致上述错误。为了解决这个问题，可以安装并使用 `vite-plugin-commonjs` 插件：

```js
import commonjs from 'vite-plugin-commonjs';
export default defineConfig({
  // ...
  plugins: [
    commonjs()
  ],
});
```

**依赖包采用 `main` 和 `module` 两种导出方式**

`package.json` 可以使用 `main` 属性作为模块导出，这是 npm 自带的属性。也可以使用 `module` 属性作为导出，但这个导出只对某些构建工具有效，比如 Vite。并且 Vite 会优先使用 `module` 的导出。因此，如果某个依赖的 `main` 使用的是 CommonJS 规范，而 `module` 使用的是 ESM 规范，如：

```json
{
  // ...
  "main": "bundle.cjs.js",
  "module": "index.es.js",
  // ...
}
```

那么 Vite 不需要使用 `vite-plugin-commonjs` 去处理这个依赖。

**Vite 会对第三方依赖做缓存**

为了提升效率，Vite 会对第三方依赖做缓存。缓存的默认路径是 `node_modules/.vite` 下。因此，有时候我们去修改了第三方代码（但通常不会这么做），重新启动项目也不会有变化。如果需要刷新缓存，只需要删除 `node_modules/.vite` 目录并重新运行项目即可。