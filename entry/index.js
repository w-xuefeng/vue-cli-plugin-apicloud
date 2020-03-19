const fs = require('fs');

module.exports = (api, projectOptions) => {
  let pages = []
  let { tempEntry, userPagesConfigPath } = require('../config')
  const { createEntries, entriesLoader } = require('../utils')
  if (fs.existsSync(api.resolve('tsconfig.json'))) {
    console.log('[VAQ] 项目使用 Typescript\n');
    userPagesConfigPath = `${userPagesConfigPath}.ts`
    tempEntry.entry = `src/main.ts`
    pages = eval(`${fs.readFileSync(api.resolve(userPagesConfigPath)).toString().replace(/export default /, '')}`)
  } else {
    pages = require(api.resolve(userPagesConfigPath))
  }
  const options = {
    ...projectOptions,
    pages: createEntries(
      api,
      pages,
      tempEntry
    )
  }
  require('@vue/cli-service/lib/config/app.js')(api, options)
  require('@vue/cli-service/lib/config/prod.js')(api, options)
  api.chainWebpack(webpackConfig => {
    entriesLoader(api, webpackConfig, tempEntry)
  })
}
