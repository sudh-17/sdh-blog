<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme';
// import TextPanel from '../components/TextPanel.vue'
// import Particle from '../components/Particle.vue'

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <!-- <template #home-hero-before>
      <Particle class="particle" />
    </template> -->
    <!-- <template #home-hero-image>
      <TextPanel />
    </template> -->
  </Layout>
</template>

<style scoped lang="scss">
:deep(.VPHomeHero) {
  .container .main {
    .text {
      font-family: fangsong;
      font-weight: normal;
    }
  }
}

@media (min-width: 960px) {
  :deep(.VPHomeHero) {
    .container .main {
      .name,
      .text {
        line-height: 64px;
        font-size: 40px;
      }
    }
  }
}
</style>
