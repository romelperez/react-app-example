const gulp = require('gulp');
const livereload = require('gulp-livereload');
const conf = require('./conf');

const dev = process.env.NODE_ENV !== 'production';

gulp.task('watch', function () {
  if (dev) {
    livereload.listen();
    gulp.watch(conf.sassFiles, ['sass']);
  }
});
