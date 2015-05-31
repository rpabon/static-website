var gulp = require('gulp');
var paths = require('../config').paths;
var flag = require('yargs').argv;
var _if = require('gulp-if');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');

gulp.task('scss', function() {
  return gulp.src(paths.scss.src)
    .pipe(_if(!flag.production, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(_if(flag.production, minifyCSS()))
    .pipe(_if(!flag.production, sourcemaps.write('./')))
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(connect.reload());
});
