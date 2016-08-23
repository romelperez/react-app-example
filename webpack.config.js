const path = require('path');
const webpack = require('webpack');
const webpackBase = require('./webpack.base.js');
const pkg = require('./package.json');
const log = require('./server/log');

const project = pkg.project;
const dev = process.env.NODE_ENV !== 'production';
const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(
      dev ? 'development' : 'production'
    )
  })
];

log.env();

if (!dev) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  );
}

module.exports = Object.assign({}, webpackBase, {
  entry: {
    'core': './src/js/core/index.js',
    'static-index': './src/js/static/index/index.js',
    'static-terms-and-conditions': './src/js/static/terms-and-conditions/index.js',
    'users-cars': './src/js/users/cars/index.js',
    'users-login': './src/js/users/login/index.js',
    'users-register': './src/js/users/register/index.js',
    'cms': './src/js/cms/index.js',
  },
  output: {
    path: './dist/js/',
    filename: '[name].js'
  },
  devtool: dev ? 'inline-source-map' : undefined,
  plugins
});
