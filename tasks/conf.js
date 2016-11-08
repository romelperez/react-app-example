let local;
try {
  local = require('./local');
} catch (e) {
  local = {};
}

let conf = {
  sass: {
    files: [
      './src/**/*.scss'
    ],
    includePaths: [
      './src',
      './node_modules/foundation-sites/scss',
      './node_modules/vulcanval/src/scss/jquery'
    ],
    output: './public/css',
  }
};

conf = Object.assign(conf, local);

module.exports = conf;
