var gulp, runSequence, tasks;

gulp = require('gulp');
tasks = require('require-dir')('./gulp/tasks');
runSequence = require('run-sequence');

gulp.task('default', function(done) {
  return runSequence('clean', 'copy', 'jade', 'less', 'scripts', 'watch', 'notify', done);
});
