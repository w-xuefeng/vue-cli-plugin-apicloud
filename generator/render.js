const fs = require('fs');
module.exports = (api, app) => {
  api.extendPackage({
    scripts: {
      "serve": `vue-cli-service serve --port ${app.port}`,
      "generate": "vue-cli-service generate"
    },
    dependencies: {
      "vue-apicloud-quickstart": "latest"
    },
    devDependencies: {
      "compressing": "^1.4.0",
      "glob": "^7.1.1",
      "js-base64": "^2.5.1"
    }
  })
  api.render('./template', { title: '<%= htmlWebpackPlugin.options.title %>', app });
}