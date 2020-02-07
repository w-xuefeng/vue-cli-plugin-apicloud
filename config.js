const defaultPagesConfig = require('./generator/template/src/config/pages');
const userPagesConfigPath = 'src/config/pages';

const vaqver = '^1.0.11';

const tempEntry = {
  template: 'public/index.html',
  chunks: ['chunk-vendors', 'chunk-common', 'index'],
  entry: 'src/main.js',
  filename: '',
  title: ''
};

const generateConfig = {
  indexHTML: 'index.html',
  configXML: 'config.xml',
  target: 'widget',
  targetZip: 'widget.zip',
  files: ['res']
};

module.exports = {
  vaqver,
  tempEntry,
  generateConfig,
  userPagesConfigPath,
  defaultPagesConfig
}