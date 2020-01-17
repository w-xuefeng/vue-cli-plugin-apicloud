const defaultPagesConfig = require('./generator/template/src/config/pages');
const userPagesConfigPath = 'src/config/pages';

const buildConfig = {
  outputDir: 'dist',
  indexPath: 'indexindex.html',
  publicPath: './',
  rebuild: true,
  filenameHashing: false,
  productionSourceMap: false
};

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
  buildConfig,
  tempEntry,
  generateConfig,
  userPagesConfigPath,
  defaultPagesConfig
}