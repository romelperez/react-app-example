// Karma configuration
const webpackBase = require('./webpack.base.js');
const log = require(process.cwd() + '/src/server/log');

log.app.env();

const isCI = process.env.NODE_CI || process.env.TRAVIS;
const webpackConf = Object.assign({}, webpackBase, {
  devtool: 'inline-source-map',
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  }
});

// Delete `include` property in loaders because karma is already in charge of
// that task.
webpackConf.module.loaders.forEach(loader => {
  delete loader.include;
});

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'public/js/core.js',
      'src/client/**/*.test.js'
    ],


    // list of files to exclude
    exclude: [
      'src/server'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['webpack', 'sourcemap']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: !isCI,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: isCI ? ['PhantomJS'] : ['Chrome', 'Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: isCI,


    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


    // Webpack
    webpack: webpackConf,
    webpackServer: {
      noInfo: true
    }
  });
};
