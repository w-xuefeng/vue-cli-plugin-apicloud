const loaderUtils = require('loader-utils');
const path = require('path');
const fs = require('fs');

module.exports = function() {
  const content = fs
    .readFileSync(path.join(process.cwd(), 'src/main.js'))
    .toString();
  if (this.resourceQuery) {
    const { page } = loaderUtils.parseQuery(this.resourceQuery)
    if (page) {
      // 页面导航 Loader
      if (page === 'index') {
        return content.replace(
          /'(.*?)'/,
          `'@w-xuefeng/vue-cli-plugin-apicloud/entry/pageIndex'`
        );
      }
      return content.replace(/'(.*?)'/, `'@/pages/${page.replace(/\\/g, '/')}'`);
    }
  }
  return content;
}
