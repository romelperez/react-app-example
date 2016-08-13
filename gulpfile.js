const autoprefixer =  require('autoprefixer');
const cssnano =       require('cssnano');
const gulp =          require('gulp');
const sass =          require('gulp-sass');
const rename =        require('gulp-rename');
const concat =        require('gulp-concat');
const gif =           require('gulp-if');
const livereload =    require('gulp-livereload');
const sourcemaps =    require('gulp-sourcemaps');
const postcss =       require('gulp-postcss');
const pkg =           require('./package.json');
const log =           require('./api/log');

const project = pkg.project;
const dev = process.env.NODE_ENV !== 'production';
const sassFiles = [
  './src/scss/**/*.scss'
];

log.env();

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

gulp.task('sass-bundle', function () {
  return gulp.
    src(sassFiles).
    pipe(sourcemaps.init()).
    pipe(
      sass({
        includePaths: [],
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
    );
});

gulp.task('sass', ['sass-bundle'], function () {
  return gulp.
    src([
      './node_modules/normalize.css/normalize.css',
      './node_modules/flexboxgrid/dist/flexboxgrid.min.css',
      './dist/css/core.css'
    ]).
    pipe(
      concat('core.css')
    ).
    pipe(
      gulp.dest('./dist/css', { overwrite: true })
    ).
    pipe(
      gif(dev, livereload())
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
