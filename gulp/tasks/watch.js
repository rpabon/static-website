var browserSync, gulp, paths, reload, watch;

gulp = require('gulp');
paths = require('../config').paths;
watch = require('gulp-watch');
browserSync = require('browser-sync').create();
reload = browserSync.reload;

  gulp.task('browser-sync', function() {
    return browserSync.init( { server: {baseDir: paths.dest} } );
  });

  gulp.task('watch', ['browser-sync'], function() {
    return gulp.watch( paths.less.src, ['less'] )
            .on('change', reload);
});

