const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

/**
 * Styles
 * 
 */
gulp.task('styles', ['lint'], () =>
  gulp.src('./src/fn.css')
    .pipe(plugins.postcss())
    .pipe(gulp.dest('./dist'))
);

/**
 * Lint
 * 
 */
gulp.task('lint', () =>
  gulp.src('./src/**/*.css')
    .pipe(plugins.stylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }))
);

/**
 * Default
 * Builds, serves and watches for changes
 */
gulp.task('default', ['lint', 'styles']);