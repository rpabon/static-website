var gulp = require('gulp'),
    paths = require('../config').paths,
    flag = require('yargs').argv,
    _if = require('gulp-if'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    runSequence = require('run-sequence'),
    connect = require('gulp-connect');

gulp.task('scripts:js-hint', function () {
  return gulp.src(paths.js.srcAll)
          .pipe(jshint())
          .pipe(jshint.reporter(stylish));
});

gulp.task('scripts:main', function () {
  return gulp.src(paths.js.src)
          .pipe(browserify({insertGlobals: true, debug: !flag.production}))
          .pipe(_if(flag.production, uglify()))
          .pipe(gulp.dest(paths.js.dest))
          .pipe(connect.reload());
});

gulp.task('scripts', function (done) {
  runSequence('scripts:js-hint', 'scripts:main', done);
});
