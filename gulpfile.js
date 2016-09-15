require('./tasks/sass');
require('./tasks/jsdoc');
require('./tasks/watch');

const gulp = require('gulp');
const log = require('./server/log');

log.app.env();

gulp.task('default', ['sass', 'watch']);
