var gulp, imagemin, imgCompressOptions, paths, pngquant;

gulp = require('gulp');
paths = require('../config').paths;
imagemin = require('gulp-imagemin');
pngquant = require('imagemin-pngquant');

imgCompressOptions = {
  progressive: true,
  svgoPlugins: [{removeViewBox: false}], use: [pngquant()]
};

gulp.task('copy:images', function() {
  return gulp.src(paths.img.src)
          .pipe(imagemin(imgCompressOptions))
          .pipe(gulp.dest(paths.img.dest));
});

gulp.task('copy', ['copy:images']);
