import base from './base';
// import base from './basePro';
import progression from './progression';
import toolbar from './toolbar';
import engineering from './engineering';

function flatMenus(menu) {
  const children = Object.keys(menu).reduce((acc, key) => {
    const menus = menu[key].map((it) => ({ ...it, collapsed: true }));
    return acc.concat(menus);
  }, []);
  return children;
}

export default {
  // ...base,
  // ...progression,
  // ...toolbar,
  // ...engineering,
  '/1-基础知识/': flatMenus(base),
  '/2-进阶技能/': flatMenus(progression),
  '/3-工程化/': flatMenus(engineering),
  '/5-工具/': flatMenus(toolbar),
};
