var gulp = require('gulp');
var paths = require('../config').paths;
var flag = require('yargs').argv;
var watch = require('gulp-watch');

gulp.task('watch', function() {
  if (!flag.production) {
    gulp.watch(paths.html.srcAll, ['jade']);
    gulp.watch(paths.scss.src, ['scss']);
    gulp.watch(paths.js.srcAll, ['scripts']);
    gulp.watch(paths.img.src, ['copy:images']);
    gulp.watch(paths.tasks, ['base']);
  }
});
