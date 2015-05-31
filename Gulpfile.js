var gulp = require('gulp');
var tasks = require('require-dir')('./gulp/tasks');
var runSequence = require('run-sequence');

gulp.task('base', function(done) {
  return runSequence('clean', 'copy', ['jade', 'scss', 'scripts'], done);
});

gulp.task('default', function(done) {
  return runSequence('base', 'watch', 'notify', 'connect', done);
});
