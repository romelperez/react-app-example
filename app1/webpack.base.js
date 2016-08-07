const path = require('path');

module.exports = {
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
  }
};
