var gulp = require('gulp');
var paths = require('../config').paths;
var flag = require('yargs').argv;
var connect = require('gulp-connect');

gulp.task('connect', function() {
  if (!flag.production) {
    connect.server({
      root: paths.dest,
      port: 3000,
      livereload: true
    });
  }
});
