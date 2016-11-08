const webpack = require('webpack');
const webpackBase = require('./webpack.base.js');
const log = require(process.cwd() + '/src/server/log');

log.app.env();

const dev = process.env.NODE_ENV !== 'production';
const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(
      dev ? 'development' : 'production'
    )
  })
];

if (!dev) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  );
}

module.exports = Object.assign({}, webpackBase, {
  entry: {
    'core':                         './src/client/core/index.js',
    'static-home':                  './src/client/static/home/index.js',
    'static-terms-and-conditions':  './src/client/static/terms-and-conditions/index.js',
    'users-cars':                   './src/client/users/cars/index.js',
    'users-login':                  './src/client/users/login/index.js',
    'users-register':               './src/client/users/register/index.js',
    'cms':                          './src/client/cms/index.js',
  },
  output: {
    path: './public/js/',
    filename: '[name].js'
  },
  devtool: dev ? 'inline-source-map' : undefined,
  plugins
});
