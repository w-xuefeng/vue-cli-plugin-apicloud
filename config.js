const buildConfig = {
  outputDir: 'dist',
  publicPath: './',
  rebuild: true,
  filenameHashing: false,
  productionSourceMap: false
};

const userPagesConfigPath = 'src/config/pages';

const defaultPagesConfig = [
  {
    title: '开屏广告页',
    name: 'index',
    path: 'index/index'
  },
  {
    title: '登录页',
    name: 'login',
    path: 'login/index'
  },
  {
    title: '应用首页',
    name: 'home',
    path: 'home/index'
  }
];

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