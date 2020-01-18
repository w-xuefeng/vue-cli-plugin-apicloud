module.exports = (api, projectOptions) => {
  const { buildConfig, tempEntry, userPagesConfigPath } = require('../config')
  const { createEntries, entriesLoader } = require('../utils')
  require('@vue/cli-service/lib/config/app.js')(api, {
    ...projectOptions,
    ...buildConfig,
    pages: createEntries(
      api,
      require(api.resolve(userPagesConfigPath)),
      tempEntry
    )
  })
  api.chainWebpack(webpackConfig => {
    entriesLoader(api, webpackConfig, tempEntry)
  })
}
