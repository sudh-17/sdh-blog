<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import TextPanel from '../components/TextPanel.vue'
// import Particle from '../components/Particle.vue'

const { Layout } = DefaultTheme

</script>

<template>
  <Layout>
    <!-- <template #home-hero-before>
      <Particle class="particle" />
    </template> -->
    <template #home-hero-image>
      <TextPanel />
    </template>
  </Layout>
</template>

<style scoped>

</style>