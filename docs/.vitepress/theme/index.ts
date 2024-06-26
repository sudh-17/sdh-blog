// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import MyTag from '../components/MyTag.vue';
import Basic from '../layouts/Basic.vue';
import MyLayout  from './MyLayout.vue';
// console.log(11111, DefaultTheme);

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component(MyTag.name, MyTag);
    app.component(Basic.name, Basic);
  },
  Layout: MyLayout,
};
