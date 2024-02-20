import { defineConfig } from 'vitepress'
import sidebar from './sidebar.js'
import nav from './nav.ts'
// import { MyTag } from '../components/MyTag.vue'

// const page = import.meta.glob('../**/*.md')
// console.log(page)
// console.log(import.meta.glob, 1212)

// https://vitepress.dev/reference/site-config
// console.log(1212, require)

export default defineConfig({
  title: '我的网站',
  description: 'A VitePress Site lala',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // logo 以及logo 标题
    logo: '/duyi.png',
    siteTitle: '树袋熊的博客',

    // 页脚
    footer: {
      message:
        'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
    }
  },
  
  // 重写路由，没成功
  // rewrites: {
  //   '/re.md': '/re2.md'
  // },
  // 基础路由
  base: '/sdh-blog/',
  markdown: {
    // 开启行号（默认禁用）
    lineNumbers: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
  }
})
