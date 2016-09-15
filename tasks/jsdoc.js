const gulp =  require('gulp');
const jsdoc = require('gulp-jsdoc3');
const pkg =   require('../package.json');

gulp.task('jsdoc', function (callback) {
  const config = {
    source: {
      exclude: [
        'node_modules',
        'bower_components',
        'static_components',
        // Because we document components in the docs/styleguide.
        'src/js/components',
        // Because we document the API in the docs/api.
        'server/api',
        'server/urls'
      ]
    },
    opts: {
      destination: './docs/js'
    },
    plugins: [
      'plugins/markdown'
    ],
    template: './node_modules/ink-docstrap/template',
    templates: {
      systemName: pkg.name,
      theme: 'cosmo',
      syntaxTheme: 'default'
    }
  };
  gulp.
    src(
      [
        './README.md',
        './server/**/*.js',
        './src/js/**/*.js'
      ],
      {
        read: false
      }
    ).
    pipe(
      jsdoc(config, callback)
    );
});
