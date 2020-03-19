module.exports = (api, app) => {
  const useTS = fs.existsSync(api.resolve('tsconfig.json'))
  api.extendPackage({
    scripts: {
      "serve": `vue-cli-service serve --port ${app.port}`,
      "generate": "vue-cli-service generate"
    },
    dependencies: {
      "vue-apicloud-quickstart": `${app.vaqver}`
    }
  })
  api.render(useTS ? './template-ts' : './template', { title: '<%= htmlWebpackPlugin.options.title %>', app });
}