const del =           require('del');
const autoprefixer =  require('autoprefixer');
const cssnano =       require('cssnano');
const sassdoc =       require('sassdoc');
const gulp =          require('gulp');
const sass =          require('gulp-sass');
const rename =        require('gulp-rename');
const gif =           require('gulp-if');
const livereload =    require('gulp-livereload');
const sourcemaps =    require('gulp-sourcemaps');
const postcss =       require('gulp-postcss');
const jsdoc =         require('gulp-jsdoc3');
const pkg =           require('./package.json');

const project = pkg.project;
const dev = process.env.NODE_ENV !== 'production';
const sassFiles = [
  './src/scss/**/*.scss'
];

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
          './node_modules/motion-ui/src'
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
// SASSDOC
//

gulp.task('docs-sass-clean', function () {
  return del(['./docs/sass']);
});

gulp.task('docs-sass', ['docs-sass-clean'], function () {
  return gulp.
    src('./src/scss/**/*.scss').
    pipe(
      sassdoc({
        package: './package.json',
        dest: './docs/sass',
        display: {
          access: ['public']
        }
      })
    );
});

//
// JSDOC
//

gulp.task('docs-js-clean', function () {
  return del(['./docs/js']);
});

gulp.task('docs-js', ['docs-js-clean'], function (callback) {
  const config = {
    opts: {
      destination: './docs/js'
    },
    plugins: [
      'plugins/markdown'
    ],
    template: './node_modules/ink-docstrap/template',
    templates: {
      systemName: pkg.name,
      footer: `<div style="text-align:center;"><b>${pkg.name}</b></div>`,
      theme: 'cosmo',
      syntaxTheme: 'default'
    }
  };
  gulp.
    src(['./src/js/**/*.js'], { read: false }).
    pipe(jsdoc(config, callback));
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

gulp.task('docs', ['docs-js', 'docs-sass']);
gulp.task('default', ['sass', 'watch']);
