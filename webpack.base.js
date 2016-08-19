const path = require('path');

module.exports = {
  resolve: {
    fallback: path.join(process.cwd(), '/src/js')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(process.cwd(), '/src/js'),
      exclude: /(node_modules|bower_components|static_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
};
