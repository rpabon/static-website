var gulp = require('gulp'),
    paths = require('../config').paths,
    flag = require('yargs').argv,
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    sourcemaps  = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect');

gulp.task('scss', function() {
  if (flag.production) {
    return gulp.src( paths.scss.src )
      .pipe( sass().on('error', sass.logError) )
      .pipe( autoprefixer() )
      .pipe( minifyCSS() )
      .pipe( gulp.dest(paths.scss.dest) )
  } else {
    return gulp.src( paths.scss.src )
            .pipe( sourcemaps.init() )
            .pipe( sass().on('error', sass.logError) )
            .pipe( autoprefixer() )
            .pipe( sourcemaps.write('./') )
            .pipe( gulp.dest(paths.scss.dest) )
            .pipe( connect.reload() );
  }
});
