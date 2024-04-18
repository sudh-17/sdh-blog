<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import TextPanel from '../components/TextPanel.vue'

const { Layout } = DefaultTheme

</script>

<template>
  <Layout>
    <!-- <template #aside-outline-before>
      My custom sidebar top content
    </template> -->
    <template #home-hero-image>
      <TextPanel />
    </template>
  </Layout>
</template>