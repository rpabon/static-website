var gulp = require('gulp'),
    paths = require('../config').paths,
    flag = require('yargs').argv,
    connect = require('gulp-connect');

gulp.task('connect', function() {
  if (!flag.production) {
    connect.server({
      root: paths.dest,
      port: 3000,
      livereload: true
    });
  }
});
