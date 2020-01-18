module.exports = (api, options) => {
  const { getIPAddress, getEntries } = require('../utils')
  const { defaultPagesConfig } = require('../config')
  require('./render')(api, {
    ...options,
    ip: getIPAddress(),
    port: options.port || 8080,
    entries: getEntries(defaultPagesConfig),
  })
  if (api.hasPlugin('eslint')) {
    api.onCreateComplete(() => {
      require('@vue/cli-plugin-eslint/lint')({}, api)
    })
  }
}
