var gulp = require('gulp'),
    paths = require('../config').paths,
    flag = require('yargs').argv,
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    connect = require('gulp-connect');

gulp.task('scripts', function() {
  if (flag.production) {
    return gulp.src( paths.js.src )
      .pipe(concat('main.js'))
      .pipe( jshint() )
      .pipe( jshint.reporter(stylish) )
      .pipe( gulp.dest(paths.js.dest) )
      .pipe( connect.reload() );
  } else {
    return gulp.src( paths.js.src )
      .pipe(concat('main.js'))
      .pipe( jshint() )
      .pipe( jshint.reporter(stylish) )
      .pipe( gulp.dest(paths.js.dest) )
      .pipe( connect.reload() );
  }
});
