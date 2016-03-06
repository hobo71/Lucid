
// gulpfile.js

// Base setup
var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    concat  = require('gulp-concat'),
    sassdoc = require('sassdoc');

// Folders
var src = 'src/';

// Concatenate .scss files
// gulp.task('sass', function() {
//   gulp.src(src + '**/*.scss')
//       .pipe(concat('library.scss'))
//       .pipe(gulp.dest(''));
// });

// Compile and concatenate .scss files
gulp.task('sass-to-css', function() {
  gulp.src(src + '**/*.scss')
      .pipe(sass())
      .pipe(concat('library.css'))
      .pipe(gulp.dest(''));
});

// Sassdoc
gulp.task('sassdocs', function () {
  return gulp.src(src + '**/*.scss')
    .pipe(sassdoc());
});

// Set up watcher
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch(src + '*.scss', [
    // 'sass',
    'sass-to-css',
    'sassdocs'
  ]);

});

// Default task
gulp.task('default', [
  // 'sass',
  'sass-to-css',
  'sassdocs',
  'watch'
]);
