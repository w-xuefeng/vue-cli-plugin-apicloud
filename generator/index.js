module.exports = (api, options) => {
  const { getIPAddress, getEntries } = require('../utils')
  const { defaultPagesConfig, vaqver } = require('../config')
  const port = options.port || 8080
  require('./render')(api, {
    ...options,
    port,
    vaqver,
    ip: getIPAddress(port).lanUrlForConfig,
    entries: getEntries(defaultPagesConfig)
  })
  if (api.hasPlugin('eslint')) {
    api.onCreateComplete(() => {
      require('@vue/cli-plugin-eslint/lint')({}, api)
    })
  }
}
