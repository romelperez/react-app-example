const glob = require('glob');
const webpackBase = require('./webpack.base.js');

module.exports = {

  // Docs site title.
  title: 'CarSeller',

  // HTML template.
  template: './docs/styleguide/template.html',

  // All files inside `src/components` with name `index.js`.
  components: './src/components/**/index.js',

  // Folder to publish the docs.
  styleguideDir: './docs/styleguide',

  // Show the code snippets by default.
  showCode: true,

  // Webpack configuration, which extends the library's with our own.
  updateWebpackConfig (conf, env) {
    conf.resolve.alias = Object.assign(conf.resolve.alias, webpackBase.resolve.alias);
    conf.module.loaders = conf.module.loaders.concat(webpackBase.module.loaders);
    return conf;
  }
};
