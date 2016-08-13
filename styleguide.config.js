const glob = require('glob');
const webpackBase = require('./webpack.base.js');

module.exports = {

  title: 'CarSeller',

  // All files inside `src/components` with ending with `.js` but without the
  // name `index` or `SOMETHING-test`.
  components: './src/components/**/!(*-test|index).js',

  // Folder to publish the docs.
  styleguideDir: './docs/styleguide',

  // Webpack configuration, which extends the library's with our own.
  updateWebpackConfig (conf, env) {
    conf.resolve.alias = Object.assign(conf.resolve.alias, webpackBase.resolve.alias);
    conf.module.loaders = conf.module.loaders.concat(webpackBase.module.loaders);
    return conf;
  }
};
