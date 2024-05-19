# 训练算法题

## 题目一

<span>给定一个数组，编写一个函数来计算它的最大N个数与最小N个数的和。</span>你需要对数组进行去重。<span><br> </span><br> <br> <span>说明：</span><br> <span>       *数组中数字范围[0, 1000]</span><br> <span>       *最大N个数与最小N个数不能有重叠，如有重叠，输入非法返回-1</span><br> <span>\*输入非法返回-1</span>

**参考答案**
```js
function sumOfMaxAndMinN(arr, n) {
  // 去重
  const uniqueArr = [...new Set(arr)];

  if (n > uniqueArr.length / 2) {
    return -1;
  }

  // 排序
  uniqueArr.sort((a, b) => a - b);

  // 选择最大的N个数
  const maxN = uniqueArr.slice(-n).reduce((sum, num) => sum + num, 0);

  // 选择最小的N个数
  const minN = uniqueArr.slice(0, n).reduce((sum, num) => sum + num, 0);

  // 计算和
  return maxN + minN;
}

// 示例使用
const myArray = [1, 2, 3, 2, 4, 5, 1, 6, 7, 8, 3, 4];
const n = 3;
const result = sumOfMaxAndMinN(myArray, n);
console.log(result); // 输出：28
// 最大的3个数是 [6, 7, 8]，和为 21
// 最小的3个数是 [1, 2, 3]，和为 6
// 所以最大3个数与最小3个数的和为 21 + 6 = 27
```

## 题目二

<div>  在学校中，N个小朋友站成一队， 第i个小朋友的身高为height[i]， </div> <div>  第i个小朋友可以看到的第一个比自己身高更高的小朋友j，那么j是i的好朋友(要求j &gt; i)。 </div> <div>  请重新生成一个列表，对应位置的输出是每个小朋友的好朋友位置，如果没有看到好朋友，请在该位置用0代替。 </div> <div>  小朋友人数范围是 [0, 40000]。 </div>

## 题目三

小扇和小船今天又玩起来了数字游戏，小船给小扇一个正整数n (1&lt;=n&lt;=1e9)，小扇需要找到一个比n大的数字m，使得m和n对应的二进制中1的个数要相同（如4对应二进制100,8对应二进制1000,1的个数都为1），现在求m的最小值。<br> <br> <br>


## 题目四

<p>  <br> </p> <div>  已知火星人使用的运算符为#、$，其与地球人的等价公式如下：  <br> x#y = 4*x+3*y+2  <br> x$y = 2*x+y+3  <br> 1、其中x、y是无符号整数  <br> 2、地球人公式按C语言规则计算  <br> 3、火星人公式中，#的优先级高于$，相同的运算符，按从左到右的顺序计算  <br> 现有一段火星人的字符串报文，请你来翻译并计算结果。  <br> <br> </div> <p>  <br> </p>

## 题目五

<span style="color: rgb(52,73,94);">一个整数可以由连续的自然数之和来表示。给定一个整数，计算该整数有几种连续自然数之和的表达式，且打印出每种表达式。</span>

**解题思路**

为了解决这个问题，我们可以使用数学方法。假设一个整数`n`可以由`k`个连续的自然数之和来表示，那么这`k`个连续的自然数可以表示为`x, x+1, x+2, ..., x+k-1`。

这`k`个数的和可以表示为：

 + ... + (x + k - 1)
S = kx + (1 + 2 + ... + (k - 1))
S = kx + (k * (k - 1) / 2)
使得上述等式成立。

我们可以通过遍历可能的`k`值（从1开始，直到`n`的一半），然后解出`x`的值来找到所有可能的组合。对于每个`k`，我们检查是否存在一个整数`x`使得`kx + k * (k - ```1) / 2`等于`n`。

下面是一个JavaScript函数的实现：

```javascript
function countConsecutiveSums(n) {  
  let count = 0;  
  let expressions = [];  

  for (let k = 1; k <= Math.floor(n / 2) + 1; k++) { // 只需要遍历到n/2+1即可  
      let x = (n - k * (k - 1) / 2) / k;  
      if (x >= 1 && Number.isInteger(x)) { // 使用Number.isInteger来检查是否是整数  
          count++;  
          if (k > 1) {
            let start = Math.round(x);  
            let end = start + k - 1;  
            expressions.push(`${start}+...+${end}`);  
          } else {
            expressions.push(`${x}`);
          }
      }  
  }  

  return { count, expressions };  
}  

// 示例  
let n = 15;  
let { count, expressions } = countConsecutiveSums(n);  

console.log(`整数${n}有${count}种连续自然数之和的表达式：`);  
expressions.forEach(expr => console.log(expr));
```

在这个函数中，我们遍历所有可能的连续自然数序列长度`k`，从1到`n`。对于每个`k`，我们计算序列的起始值`x`，并检查它是否是一个正整数。如果是，我们就找到了一个有效的连续自然数序列，并增加计数器`count`，同时把表达式添加到`expressions`数组中。

最后，我们返回包含`count`和`expressions`的对象，并打印出每种有效的连续自然数之和的表达式。

请注意，当`n`变得非常大时，这个函数可能需要较长的时间来执行，因为它会尝试所有可能的`k`值。在实际应用中，你可能需要优化算法以提高效率，特别是当处理大数时。

## 题目六

有一个总空间为100字节的堆，现要从中新申请一块内存，内存分配原则为优先紧接着前一块已使用内存分配空间足够且最接近申请大小的空闲内存。<br>

## 题目七

给一个正整数列 nums，一个跳数 jump，及幸存数量 left。运算过程为：从索引为0的位置开始向后跳，中间跳过 J 个数字，命中索引为J+1的数字，该数被敲出，并从该点起跳，以此类推，直到幸存left个数为止。然后返回幸存数之和。 <br> 约束： <br> 1）0是第一个起跳点。 <br> 2）起跳点和命中点之间间隔 jump 个数字，已被敲出的数字不计入在内。 <br> 3）跳到末尾时无缝从头开始（循环查找），并可以多次循环。 <br> 4）若起始时 left&gt;len(nums) 则无需跳数处理过程。 <br> <br> /** <br> * nums: 正整数数列，长度范围 [1,10000] <br> * jump: 跳数，范围 [1,10000] <br> * left: 幸存数量，范围 [0,10000] <br> * return: 幸存数之和 <br> */ <br> int sumOfLeft(int[] nums,int jump,int left)

**参考答案**

```js
function sumOfLeft(nums, jump, left) {  
  if (left >= nums.length) {  
      return nums.reduce((acc, val) => acc + val, 0);  
  }  

  let currentIndex = 0;  
  let removed = 0;  

  while (nums.length > left) {  
      currentIndex = (currentIndex + jump) % nums.length;  
      nums.splice(currentIndex, 1);  
      removed++;  
  }  

  return nums.reduce((acc, val) => acc + val, 0);  
}  

// 示例用法  
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
const jump = 2;  
const left = 3;  

console.log(sumOfLeft(nums, jump, left)); // 应输出幸存数字之和
```