const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const gif = require('gulp-if');
const livereload = require('gulp-livereload');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const conf = require('./conf');

const dev = process.env.NODE_ENV !== 'production';

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
    src(conf.sass.files).
    pipe(sourcemaps.init()).
    pipe(
      sass({
        includePaths: conf.sass.includePaths,
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
      gulp.dest(conf.sass.output, { overwrite: true })
    ).
    pipe(
      gif(dev, livereload())
    );
});
