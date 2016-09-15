const path = require('path');

module.exports = {
  resolve: {
    fallback: path.join(process.cwd(), '/src')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(process.cwd(), '/src'),
      exclude: /(node_modules|bower_components|static_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  }
};
