module.exports = (api, options) => {
  const { getIPAdress, getEntries } = require('../utils')
  const { defaultPagesConfig } = require('../config')
  require('./render')(api, {
    ...options,
    ip: getIPAdress(),
    port: options.port || 8080,
    entries: getEntries(defaultPagesConfig),
    entriesString: JSON.stringify(defaultPagesConfig, null, 2)
  })
  if (api.hasPlugin('eslint')) {
    api.onCreateComplete(() => {
      require('@vue/cli-plugin-eslint/lint')({}, api)
    })
  }
}
