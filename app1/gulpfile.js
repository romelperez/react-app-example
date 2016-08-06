const gulp =          require('gulp');
const sass =          require('gulp-sass');
const rename =        require('gulp-rename');
const gif =           require('gulp-if');
const livereload =    require('gulp-livereload');
const sourcemaps =    require('gulp-sourcemaps');
const postcss =       require('gulp-postcss');
const autoprefixer =  require('autoprefixer');
const cssnano =       require('cssnano');
const pkg =           require('./package.json');

const project = pkg._project;
const dev = process.env.NODE_ENV ? process.env.NODE_ENV !== 'production' : project.dev;
const postcssList = [
  autoprefixer({browsers: [
    'last 5 version',
    '> 5%'
  ]})
];
const sassFiles = [
  './src/scss/**/*.scss'
];

if (!dev) {
  postcssList.push(cssnano());
}

gulp.task('sass', function () {
  return gulp.src(sassFiles).
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
    pipe(sourcemaps.write()).
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

gulp.task('watch', function () {
  if (dev) {
    livereload.listen();
    gulp.watch(sassFiles, ['sass']);
  }
});

gulp.task('build', ['sass']);
gulp.task('default', ['build', 'watch']);
