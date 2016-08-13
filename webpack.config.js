const path = require('path');
const webpack = require('webpack');
const webpackBase = require('./webpack.base.js');
const pkg = require('./package.json');
const log = require('./api/log');

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
    core: './src/core/index.js',
    index: './src/index/index.js',
  },
  output: {
    path: './dist/js/',
    filename: '[name].js'
  },
  devtool: dev ? 'inline-source-map' : undefined,
  plugins
});
