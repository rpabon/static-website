var gulp = require('gulp'),
    paths = require('../config').paths,
    watch = require('gulp-watch');

gulp.task('watch', function() {
  gulp.watch( paths.html.srcAll, ['jade']);
  gulp.watch( paths.scss.src, ['scss']);
  gulp.watch( paths.img.src, ['copy:images']);
});
