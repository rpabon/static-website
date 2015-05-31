var gulp = require('gulp');
var paths = require('../config').paths;
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var imgCompressOptions = {
  progressive: true,
  svgoPlugins: [{removeViewBox: false}], use: [pngquant()]
};

gulp.task('copy:images', function() {
  return gulp.src(paths.img.src)
    .pipe(imagemin(imgCompressOptions))
    .pipe(gulp.dest(paths.img.dest));
});

gulp.task('copy', ['copy:images']);
