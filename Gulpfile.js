var gulp = require('gulp'),
    tasks = require('require-dir')('./gulp/tasks'),
    runSequence = require('run-sequence');

gulp.task('base', function(done) {
  return runSequence('clean', 'copy', ['jade', 'scss', 'scripts'], done);
});

gulp.task('default', function(done) {
  return runSequence('base', 'watch', 'notify', 'connect', done);
});
