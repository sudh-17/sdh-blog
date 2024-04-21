import { defineConfig } from 'vitepress';
import sidebar from './sidebar/index.ts';
import nav from './nav.ts';

export default defineConfig({
  lang: 'zh-CN',
  title: '树袋熊的博客',
  description: '树袋熊的博客',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/sdh-blog/koala1.png' }],
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sudh-17/sdh-blog' },
    ],

    // logo 以及logo 标题
    logo: '/koala1.png',
    siteTitle: '树袋熊的博客',
    outline: {
      label: '页面导航',
    },

    // 页脚
    footer: {
      message:
        'Released under the <a href="https://github.com/sudh-17/sdh-blog/blob/master/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2023-present <a href="https://github.com/sudh-17">树袋熊</a>',
    },
  },

  // 基础路由
  base: '/sdh-blog/',
  markdown: {
    // 开启行号（默认禁用）
    lineNumbers: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
  },
});
