var gulp = require('gulp');
var paths = require('../config').paths;
var flag = require('yargs').argv;
var jade = require('gulp-jade');
var connect = require('gulp-connect');

gulp.task('jade', function() {
  return gulp.src(paths.html.src)
    .pipe(jade({pretty: !flag.production}))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(connect.reload());
});
