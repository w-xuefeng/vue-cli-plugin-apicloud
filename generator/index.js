module.exports = (api, options) => {
  const { getIPAdress, getEntries } = require('../utils');
  const { userPagesConfigPath } = require('../config')
  require('./render')(api, {
    ...options,
    ip: getIPAdress(),
    port: options.port || 8080,
    entries: getEntries(require(api.resolve(userPagesConfigPath)))
  })
  if (api.hasPlugin('eslint')) {
    api.onCreateComplete(() => {
      require('@vue/cli-plugin-eslint/lint')({}, api)
    })
  }
}
