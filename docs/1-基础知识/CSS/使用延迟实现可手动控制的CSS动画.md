# 使用延迟实现可手动控制的CSS动画

## 效果展示

![alt text](<images/20240422_202000 00_00_00-00_00_30.gif>)

该动画效果实现了手动滑动进度条去控制动画的播放进度。

## 实现代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
      .circle {
        --delay: 0s;
        width: 32px;
        height: 32px;
        background-color: red;
        border-radius: 50%;
        /* animation: move 1s linear forwards var(--delay) paused; */
        animation: move 1s cubic-bezier(0.42, 0, 0.02, 1.3) forwards var(--delay) paused;
        position: absolute;
        top: 50px;
      }
      @keyframes move {
        50% {
          transform: translateX(100px) scale(1.5);
          background-color: red;
        }
        to {
          transform: translateX(200px) scale(1);
          background-color: green;
        }
      }
    </style>
  </head>
  <body>
    <input id="range" type="range" value="0" min="0" max="1" step="0.1" />
    <div class="circle"></div>

    <script>
      const range = document.getElementById('range')
      const circle = document.querySelector('.circle')
      const body = document.body

      function handler() {
        const value = range.value
        circle.style.setProperty('--delay', `-${value}s`)
      }

      handler()

      range.addEventListener('input', handler)
    </script>
  </body>
</html>
```
