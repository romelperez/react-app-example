const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

const project = pkg._project;
const dev = process.env.NODE_ENV ? process.env.NODE_ENV !== 'production' : project.dev;
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

module.exports = {
  entry: {
    core: './src/js/core/core.js',
    index: './src/js/index/index.js',
  },
  output: {
    path: './dist/js/',
    filename: '[name].js'
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      tools: 'src/js/tools',
      i18n: 'src/js/i18n',
      components: 'src/js/components',
      settings: 'src/js/settings.js',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: dev ? '#inline-source-map' : undefined,
  plugins
};
