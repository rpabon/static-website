var gulp = require('gulp');
var paths = require('../config').paths;
var flag = require('yargs').argv;
var notify = require('gulp-notify');
var msg;

if (flag.production) {
  msg = 'Production build completed!';
} else {
  msg = 'Development tasks completed! Watching on localhost:3000...';
}

gulp.task('notify', function() {
  return gulp.src(paths.src)
    .pipe(notify({message: msg, onLast: true}));
});
