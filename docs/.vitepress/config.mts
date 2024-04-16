import { defineConfig } from 'vitepress';
import sidebar from './sidebar/index.ts';
import nav from './nav.ts';

export default defineConfig({
  lang: 'zh-CN',
  title: '我的网站',
  description: 'A VitePress Site lala',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sudh-17/sdh-blog' },
    ],

    // logo 以及logo 标题
    logo: '/ico.png',
    siteTitle: '树袋熊的博客',
    outline: {
      label: '页面导航',
    },

    // 页脚
    footer: {
      message:
        'Released under the <a href="https://github.com/sudh-17/sdh-blog/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2019-present <a href="https://github.com/yyx990803">树袋熊</a>',
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

  // locales: {
  //   root: { label: 'English', ...en },
  //   zh: { label: '简体中文', ...zh },
  //   pt: { label: 'Português', ...pt },
  //   ru: { label: 'Русский', ...ru },
  //   ko: { label: '한국어', lang: 'ko-KR', link: 'https://vitepress.vuejs.kr/' }
  // }
});
