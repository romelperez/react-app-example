const path = require('path');

module.exports = {
  resolve: {
    alias: {
      src:        path.resolve(__dirname + '/src'),
      tools:      path.resolve(__dirname + '/src/tools'),
      i18n:       path.resolve(__dirname + '/src/i18n'),
      components: path.resolve(__dirname + '/src/components'),
      settings:   path.resolve(__dirname + '/src/settings.js'),
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.resolve(__dirname + '/src'),
      exclude: /(\/lib\/|node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
};
