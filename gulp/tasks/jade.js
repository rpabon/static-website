var gulp = require('gulp'),
    paths = require('../config').paths,
    flag = require('yargs').argv,
    jade = require('gulp-jade'),
    connect = require('gulp-connect');

gulp.task('jade', function() {
  return gulp.src( paths.html.src )
    .pipe( jade({pretty: !flag.production}) )
    .pipe( gulp.dest(paths.html.dest) )
    .pipe( connect.reload() );
});
