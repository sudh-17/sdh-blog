<template>
  <div class="wrap">
    <div class="outer">
      <p class="inner">编程之路，与你同行</p>
      <p class="inner">深入探索，共同成长</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.wrap {
  z-index: 1;
  display: flex;
  filter: none;
  .outer {
    align-content: center;
    padding: 5px;
    width: 250px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 2px;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 200%;
      height: 200%;
      background-color: #00ffff;
      top: 50%;
      left: 50%;
      z-index: -2;
      transform-origin: left top;
      animation: rota 1.8s infinite linear;
    }
    &::after {
      --w: 3px;
      content: '';
      position: absolute;
      width: 150%;
      height: 150%;
      z-index: -1;
      background-color: var(--vp-c-bg);
      top: var(--w);
      left: var(--w);
      width: calc(100% - 2 * var(--w));
      height: calc(100% - 2 * var(--w));
      border-radius: inherit;
    }
    .inner {
      text-align: center;
      font-size: 22px;
      font-weight: bold;
      margin: 5px auto;
    }
  }
}

@keyframes rota {
  to {
    transform: rotate(360deg);
  }
}
</style>
