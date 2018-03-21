var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
gulp.task('css', function(){
  return gulp.src('views/resource/styles.ejs')
    .pipe(useref())
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});