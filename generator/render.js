module.exports = (api, app) => {
  api.extendPackage({
    scripts: {
      "serve": `vue-cli-service serve --port ${app.port}`,
      "generate": "vue-cli-service generate"
    },
    dependencies: {
      "vue-apicloud-quickstart": "latest"
    }
  })
  api.render('./template', { title: '<%= htmlWebpackPlugin.options.title %>', app });
}