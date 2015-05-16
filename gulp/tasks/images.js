var gulp, paths;

gulp = require('gulp');
paths = require('../config').paths;

gulp.task('images', function() {
  return gulp.src( paths.img.src )
          .pipe( gulp.dest(paths.img.dest) );
});
