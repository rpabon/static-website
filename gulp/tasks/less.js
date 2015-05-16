var gulp, less, paths;

gulp = require('gulp');
paths = require('../config').paths;
less = require('gulp-less');

gulp.task('less', function() {
  return gulp.src( paths.less.srcMain )
          .pipe( less() )
          .pipe( gulp.dest(paths.less.dest) );
});
