const
  argv = require('yargs').argv,
  fs = require('fs'),
  {resolve} = require('./utils');



const
  duboConfig = require('../dubo.config.js'),
  isProd = duboConfig.env === 'production' ? true : false;

module.exports = {
  project: duboConfig.project,
  env: duboConfig.env,
  isProd,
  openssl: duboConfig.openssl,
  assetsPath: duboConfig.assetsPath,
  distPublicPath: isProd ? duboConfig.distPublicPath : '/dist/',
  sourceMap: duboConfig.sourceMap,
  bundleAnalyzerReport: duboConfig.bundleAnalyzerReport,
}
