---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 前端学思录
  text: SDX'S BLOG
  tagline: 默默耕耘技术田，与您共探编程道。
  image:
    src: /ko.png
    alt: '树袋熊'
  actions:
    - theme: brand
      text: 学习之路
      link: /1-基础知识/study.md
    # - theme: alt
    #   text: 工具箱
    #   link: /api-examples

features:
  - icon: 📝
    title: 系统化学习路径
    details: 在基础知识栏目中，我将为读者提供一条清晰的学习路径，从编程的基本概念逐步引导读者建立起扎实的编程基础。
  - title: 深入技术剖析
    icon: 📖
    details: 进阶技能栏目将聚焦于深入剖析各种编程技术、框架和工具的使用原理。通过深入讲解和案例分析，与读者分享技术。
  # - title: Feature C
  #   icon: 🔍
  #   details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: 工具使用教程
    icon: 🛠️
    details: 对于推荐的每个工具，工具栏目都将提供详细的使用教程。让读者能够快速上手并发挥工具的最大效用。
  # - title: Feature E
  #   icon: 🤖
  #   details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  /* --vp-home-hero-name-background: -webkit-linear-gradient(110deg, #FEB727 30%, #532482);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #FEB727 50%, #532482 50%); */
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }

  ::v-deep .name, ::v-deep .text {
    /* line-height: 64px; */
    font-size: 36px;
  }
}


#text1 {
  z-index: 1;
}
</style>

<script setup>
// import { onMounted, createApp } from 'vue'
// import TextPanel from './.vitepress/components/TextPanel.vue'

// onMounted(() => {
  // let text1 = document.querySelector('#text1')
  // if (!text1) {
  //   const container = document.querySelector('.image-container')
  //   text1 = document.createElement('div')
  //   text1.setAttribute('id', 'text1')
  //   container.appendChild(text1)
  // }
  
  // const app = createApp(TextPanel)
  //   .mount('#text1')
// })
</script>
