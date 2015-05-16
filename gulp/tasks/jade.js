var gulp, jade, paths;

gulp = require('gulp');
paths = require('../config').paths;
jade = require('gulp-jade');

gulp.task('jade', function() {
  return gulp.src( paths.html.src )
          .pipe( jade({pretty: true}) )
          .pipe( gulp.dest(paths.html.dest) );
});
