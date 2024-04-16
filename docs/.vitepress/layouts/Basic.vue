<template>
  <div class="basic-layout">
    <div class="main">
      <h1 style="color: green">这里是一个自定义布局</h1>
      <!-- <slot></slot> -->
      <Content />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Basic',
};
</script>

<style lang="scss" scoped>
.basic-layout {
  .main {
    margin: 0 auto;
    width: 1200px;
  }
}

</style>
