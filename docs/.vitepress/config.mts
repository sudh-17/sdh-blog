import { defineConfig } from 'vitepress'
import sidebar from './sidebar.js'
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
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'about', link: '/about/' },
      {
        text: 'about2',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],

    // sidebar: [
    //   {
    //     text: '侧边栏标题kd',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //       { text: '手写bind', link: '/js基础/什么是原型' },
    //       { text: 're', link: '/re' },
    //       {
    //         text: '手写编程',
    //         link: '/js基础/test',
    //         items: [{ text: '手写测试啦', link: '/js基础/test' }]
    //       }
    //     ]
    //   }
    // ],
    sidebar,

    // sidebar: {
    //   // '/about/': genSidebarConfig('../js基础'),
    //   '/about/': [
    //     {
    //       text: 'Guide',
    //       items: [
    //         { text: 'Index', link: '/guide/' },
    //         { text: 'One', link: '/guide/one' },
    //         { text: 'Two', link: '/guide/two' }
    //       ]
    //     }
    //   ],
    //   '/config/': [
    //     {
    //       text: 'Config',
    //       items: [
    //         { text: 'Index', link: '/config/' },
    //         { text: 'Three', link: '/config/three' },
    //         { text: 'Four', link: '/config/four' }
    //       ]
    //     }
    //   ]
    // },

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
  // 多语言
  // locales: {
  //   root: {
  //     label: '中文',
  //     lang: 'zh'
  //   },
  //   fr: {
  //     label: 'en',
  //     lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
  //     link: '/fr/guide' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的

  //     // 其余 locale 特定属性...
  //   }
  // },
  // 重写路由，没成功
  rewrites: {
    '/re.md': '/re2.md'
  },
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
