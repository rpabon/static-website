var clean, gulp, paths;

gulp = require('gulp');
paths = require('../config').paths;
clean = require('del');

gulp.task('clean', function() {
  return clean([paths.dest]);
});
