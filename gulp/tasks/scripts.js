var concat, gulp, jshint, paths, vendorFiles;

gulp = require('gulp');
paths = require('../config').paths;
concat = require('gulp-concat');
jshint = require('gulp-jshint');

vendorFiles = ['bower_components/jquery/jquery.js', 'bower_components/jqueryui/ui/jquery.ui.core.js', 'bower_components/jqueryui/ui/jquery.ui.widget.js', 'bower_components/jqueryui/ui/jquery.ui.mouse.js', 'bower_components/jqueryui/ui/jquery.ui.draggable.js', 'bower_components/jqueryui/ui/jquery.ui.effect.js', 'bower_components/hoverintent/jquery.hoverIntent.js', 'bower_components/underscore/underscore.js', 'bower_components/intentionjs/intention.js', 'bower_components/intentionjs/context.js'];

gulp.task('scripts:vendor', function() {
  return gulp.src( vendorFiles )
          .pipe( concat('vendor.js') )
          .pipe( gulp.dest(paths.js.dest) );
});

gulp.task('scripts:main', function() {
  return gulp.src( paths.js.src )
          .pipe(concat('main.js'))
          .pipe( jshint() )
          .pipe( gulp.dest(paths.js.dest) );
});

gulp.task('scripts', ['scripts:vendor', 'scripts:main']);
