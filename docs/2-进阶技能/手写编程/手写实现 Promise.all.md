
# 手写实现 Promise.all：深入理解 JavaScript Promise

在 JavaScript 中，`Promise.all` 是一个非常重要的方法，它接受一个 Promise 对象的数组作为参数，当所有的 Promise 都成功解决后，它将以数组的形式返回所有 Promise 的结果。如果任何一个 Promise 失败，`Promise.all` 会立即拒绝并返回第一个失败的错误。这个方法在并发处理多个异步操作时非常有用。

然而，了解 `Promise.all` 的工作原理，甚至自己手动实现一个，可以帮助我们更深入地理解 Promise 和异步编程。下面，我们就来手动实现一个 `Promise.all` 的功能，并命名为 `Promise.myAll`。


```javascript
Promise.myAll = function (promises) {
  let res, rej;
  // 创建一个新的 Promise 对象
  let p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  
  let i = 0;
  let result = [];
  
  // 遍历传入的 Promise 数组
  for (let it of promises) {
    const index = i;
    i++;
    
    // 使用 Promise.resolve 确保 it 是一个 Promise 对象
    Promise.resolve(it)
      .then((val) => {
        // 当 Promise 成功解决时，保存结果到 result 数组中
        result[index] = val;
        i--;
        // 当所有的 Promise 都成功解决时，解决我们创建的 Promise p
        if (i === 0) {
          res(result);
        }
      })
      .catch(rej); // 如果任何一个 Promise 失败，就拒绝我们创建的 Promise p
  }
  
  // 如果传入的数组为空，直接解决我们创建的 Promise p
  if (i === 0) {
    res(result);
  }
  
  return p; // 返回我们创建的 Promise 对象
};
```
上述代码创建了一个新的 Promise 对象 `p`，然后遍历传入的 Promise 数组。对于数组中的每个 Promise，我们都将其解决值保存到 `result` 数组中。如果所有的 Promise 都成功解决，我们就解决 `p` 并返回 `result` 数组。如果任何一个 Promise 失败，我们就拒绝 `p`。

这个 `Promise.myAll` 函数的行为应该与标准的 `Promise.all` 非常相似。你可以像使用 `Promise.all` 一样使用它：传入一个 Promise 数组，并得到一个在所有 Promise 都成功解决后解决的 Promise。

这个手动实现的版本可以帮助我们更深入地理解 `Promise.all` 的工作原理，以及 Promise 和异步编程的基本概念。在实际开发中，我们通常会直接使用内置的 `Promise.all`，因为它已经经过了优化，并且更加可靠。但是，通过手动实现，我们可以更好地理解其背后的原理，这对我们理解和使用 Promise 是非常有帮助的。
