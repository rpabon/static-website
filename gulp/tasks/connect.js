var gulp = require('gulp'),
    paths = require('../config').paths,
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: paths.dest,
    port: 3000,
    livereload: true
  });
});
