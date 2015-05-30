var gulp = require('gulp'),
    paths = require('../config').paths,
    flag = require('yargs').argv,
    watch = require('gulp-watch');

gulp.task('watch', function() {
  if (!flag.production) {
    gulp.watch( paths.html.srcAll, ['jade']);
    gulp.watch( paths.scss.src, ['scss']);
    gulp.watch( paths.js.srcAll, ['scripts']);
    gulp.watch( paths.img.src, ['copy:images']);
    gulp.watch( paths.tasks, ['base']);
  }
});
