const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

/**
 * Styles
 */
gulp.task('styles', ['lint'], () =>
  gulp.src(['./src/fn.css', './src/fn-xs.css'])
    .pipe(plugins.postcss())
    .pipe(gulp.dest('./dist'))
);

/**
 * Lint
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
 */
gulp.task('default', ['lint', 'styles']);
