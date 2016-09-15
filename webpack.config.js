const webpack = require('webpack');
const webpackBase = require('./webpack.base.js');
const log = require('./server/log');

const dev = process.env.NODE_ENV !== 'production';
const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(
      dev ? 'development' : 'production'
    )
  })
];

log.app.env();

if (!dev) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  );
}

module.exports = Object.assign({}, webpackBase, {
  entry: {
    'core':                         './src/core/index.js',
    'static-index':                 './src/static/index/index.js',
    'static-terms-and-conditions':  './src/static/terms-and-conditions/index.js',
    'users-cars':                   './src/users/cars/index.js',
    'users-login':                  './src/users/login/index.js',
    'users-register':               './src/users/register/index.js',
    'cms':                          './src/cms/index.js',
  },
  output: {
    path: './dist/js/',
    filename: '[name].js'
  },
  devtool: dev ? 'inline-source-map' : undefined,
  plugins
});
