var gulp = require('gulp'),
    paths = require('../config').paths,
    flag = require('yargs').argv,
    notify = require('gulp-notify'),
    msg = flag.production ? 'Production build completed!' : 'Development tasks completed! Watching on localhost:3000...';

gulp.task('notify', function() {
  return gulp.src( paths.src )
          .pipe( notify({message: msg, onLast: true}) );
});
