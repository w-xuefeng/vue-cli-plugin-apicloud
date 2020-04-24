const loaderUtils = require('loader-utils');
const path = require('path');
const fs = require('fs');

module.exports = function () {
  if (this.resourceQuery) {
    const { page, useTs } = loaderUtils.parseQuery(this.resourceQuery)
    const entryPath = useTs ? `src/main.ts` : `src/main.js`
    const content = fs
      .readFileSync(path.join(process.cwd(), entryPath))
      .toString();
    if (page) {
      // 页面导航 Loader
      if (page === 'index') {
        return content.replace(
          /["|']\.\/App.vue["|']/,
          `'@w-xuefeng/vue-cli-plugin-apicloud/entry/${useTs ? 'pageIndex-ts' : 'pageIndex'}'`
        );
      }
      return content.replace(/["|']\.\/App.vue["|']/, `'@/pages/${page.replace(/\\/g, '/')}'`);
    }
    return content;
  }
  console.error('Page entry load error');
  return `console.error('Page entry load error')`;
}