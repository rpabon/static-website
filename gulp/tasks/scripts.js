var gulp = require('gulp');
var paths = require('../config').paths;
var flag = require('yargs').argv;
var runSequence = require('run-sequence');
var eventStream = require('event-stream');
var sourcemaps = require('gulp-sourcemaps');
var _if = require('gulp-if');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var hintStylish = require('jshint-stylish');
var jscs = require('gulp-jscs');
var codeStylish = require('gulp-jscs-stylish');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var doNothing = function() {};

gulp.task('scripts:hint', function() {
  var taskStream = gulp.src(paths.tasks);
  var jsStream = gulp.src(paths.js.srcAll);

  return eventStream.merge(taskStream, jsStream)
    .pipe(jshint())
    .pipe(jscs({'preset': 'google'})).on('error', doNothing)
    .pipe(codeStylish.combineWithHintResults())
    .pipe(jshint.reporter(hintStylish));
});

gulp.task('scripts:bundle', function() {
  return gulp.src(paths.js.src)
    .pipe(browserify({insertGlobals: true, debug: !flag.production}))
    .pipe(_if(!flag.production, sourcemaps.init({loadMaps: true})))
    .pipe(_if(!flag.production, sourcemaps.write()))
    .pipe(_if(flag.production, uglify()))
    .pipe(gulp.dest(paths.js.dest))
    .pipe(connect.reload());
});

gulp.task('scripts', function(done) {
  runSequence('scripts:hint', 'scripts:bundle', done);
});
