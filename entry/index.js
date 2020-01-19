module.exports = (api, projectOptions) => {
  const { buildConfig, tempEntry, userPagesConfigPath } = require('../config')
  const { createEntries, entriesLoader } = require('../utils')
  const options = {
    ...projectOptions,
    ...buildConfig,
    pages: createEntries(api, require(api.resolve(userPagesConfigPath)), tempEntry)
  }
  require('@vue/cli-service/lib/config/app.js')(api, options)
  require('@vue/cli-service/lib/config/prod.js')(api, options)
  api.chainWebpack(webpackConfig => {
    entriesLoader(api, webpackConfig, tempEntry)
  })
}
