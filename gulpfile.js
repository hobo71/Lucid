
// gulpfile.js

// Base setup
var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    concat  = require('gulp-concat'),
    sassdoc = require('sassdoc');

// Folders
var src = 'src/';

// Compile Sass
gulp.task('sass', function () {
  return gulp.src('library.scss')
    .pipe(sass())
    .pipe(gulp.dest(''));
})

// Sassdoc
gulp.task('sassdocs', function () {
  return gulp.src(src + '**/*.scss')
    .pipe(sassdoc());
});

// Set up watcher
gulp.task('watch', function () {

  // Watch .scss files
  gulp.watch(src + '**/*.scss', [
    'sass',
    'sassdocs'
  ]);

});

// Default task
gulp.task('default', [
  'sass',
  'sassdocs',
  'watch'
]);
