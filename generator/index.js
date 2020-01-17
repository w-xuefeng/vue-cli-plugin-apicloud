module.exports = (api, options) => {
  const { getIPAdress, getEntries } = require('../utils')
  const { defaultPagesConfig } = require('../config')
  const entries = getEntries(defaultPagesConfig)
  require('./render')(api, {
    ...options,
    entries,
    ip: getIPAdress(),
    port: options.port || 8080,
    entriesString: JSON.stringify(entries)
  })
  if (api.hasPlugin('eslint')) {
    api.onCreateComplete(() => {
      require('@vue/cli-plugin-eslint/lint')({}, api)
    })
  }
}
