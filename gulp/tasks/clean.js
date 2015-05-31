var gulp = require('gulp');
var paths = require('../config').paths;
var clean = require('del');

gulp.task('clean', function() {
  return clean([paths.dest]);
});
