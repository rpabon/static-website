var gulp = require('gulp'),
    paths = require('../config').paths,
    flag = require('yargs').argv,
    _if = require('gulp-if'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    sourcemaps  = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect');

gulp.task('scss', function() {
  return gulp.src( paths.scss.src )
          .pipe( _if(!flag.production, sourcemaps.init()) )
          .pipe( sass().on('error', sass.logError) )
          .pipe( autoprefixer() )
          .pipe( _if(flag.production, minifyCSS()) )
          .pipe( _if(!flag.production, sourcemaps.write('./')) )
          .pipe( gulp.dest(paths.scss.dest) )
          .pipe( connect.reload() );
});
