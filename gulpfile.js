const autoprefixer =  require('autoprefixer');
const cssnano =       require('cssnano');
const gulp =          require('gulp');
const sass =          require('gulp-sass');
const rename =        require('gulp-rename');
const gif =           require('gulp-if');
const livereload =    require('gulp-livereload');
const sourcemaps =    require('gulp-sourcemaps');
const postcss =       require('gulp-postcss');
const jsdoc =         require('gulp-jsdoc3');
const pkg =           require('./package.json');
const log =           require('./server/log');

const dev = process.env.NODE_ENV !== 'production';
const sassFiles = [
  './src/scss/**/*.scss'
];

log.app.env();

//
// SASS
//

const postcssList = [
  autoprefixer({browsers: [
    'last 5 version',
    '> 5%'
  ]})
];

if (!dev) {
  postcssList.push(cssnano());
}

gulp.task('sass', function () {
  return gulp.
    src(sassFiles).
    pipe(sourcemaps.init()).
    pipe(
      sass({
        includePaths: [
          './node_modules/foundation-sites/scss',
          './node_modules/vulcanval/src/scss/jquery'
        ],
        outputStyle: dev ? 'nested' : 'compressed',
        sourceMap: dev,
        sourceComments: dev,
        sourceMapEmbed: dev
      }).
      on('error', sass.logError)
    ).
    pipe(sourcemaps.write(undefined, { sourceRoot: null })).
    pipe(
      postcss(postcssList)
    ).
    pipe(
      rename({ dirname: '' })
    ).
    pipe(
      gulp.dest('./dist/css', { overwrite: true })
    ).
    pipe(
      gif(dev, livereload())
    );
});

//
// JSDOC
//

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

//
// WATCH
//

gulp.task('watch', function () {
  if (dev) {
    livereload.listen();
    gulp.watch(sassFiles, ['sass']);
  }
});

gulp.task('default', ['sass', 'watch']);
