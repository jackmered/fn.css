const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

/**
 * Styles
 */
gulp.task('styles', () =>
  gulp.src([
      './src/fn.css',
      './src/xs-fn.css',
      './src/sm-fn.css',
      './src/md-fn.css',
      './src/lg-fn.css',
      './src/xl-fn.css',
    ])
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
        { formatter: 'string', console: true }
      ]
    }))
);

/**
 * Default
 */
gulp.task('default', gulp.series('lint', 'styles'));
