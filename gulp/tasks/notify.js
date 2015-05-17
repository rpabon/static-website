var gulp = require('gulp'),
    paths = require('../config').paths,
    notify = require('gulp-notify');
  
var defaultMsg = 'Default tasks completed! Watching...';

gulp.task('notify', function() {
  return gulp.src( paths.src )
          .pipe( notify({message: defaultMsg, onLast: true}) );
});
