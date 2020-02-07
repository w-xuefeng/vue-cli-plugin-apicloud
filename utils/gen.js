module.exports = (api, projectOptions) => {
  api.registerCommand('generate', args => {
    const { generateConfig } = require('../config')
    const { generate, resolve } = require('../utils')
    const { indexHTML, configXML, target, targetZip, files } = generateConfig;
    const { outputDir = 'dist' } = projectOptions;
    const rebuild = true;
    const FROME = resolve(api, outputDir);
    const INDEXFILE = resolve(api, indexHTML);
    const CONFIGXML = resolve(api, configXML);
    const TO = resolve(api, target);
    const TOZIP = resolve(api, targetZip);
    const OtherFiles = files;
    const config = { api, FROME, TO, OtherFiles, target, CONFIGXML, INDEXFILE, outputDir, TOZIP, rebuild }
    generate(config);
  });
}