import base from './base';

function flatMenus(menu) {
  const children = Object.keys(menu).reduce((acc, key) => {
    const menus = menu[key].map((it) => ({ ...it, collapsed: true }));
    return acc.concat(menus);
  }, []);
  return children;
}

export default {
  '/1-基础知识/': flatMenus(base),
};
