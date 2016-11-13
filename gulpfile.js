var gulp           = require('gulp'),
    bourbon        = require('node-bourbon'),
    notify         = require("gulp-notify"),
    browserSync    = require('browser-sync'),
    autoprefixer   = require('gulp-autoprefixer'),
    sass           = require('gulp-sass'),
    watch          = require('gulp-watch');


gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: ''
		},
		notify: false
	});
});

gulp.task('sass', function() {
	return gulp.src('scss/**/*.scss')
		.pipe(sass({
			includePaths: bourbon.includePaths
		}).on("error", notify.onError()))
		.pipe(autoprefixer({ browsers: ['> 1%', 'IE 7'], cascade: false }))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', ['sass', 'browser-sync'], function() {
	gulp.watch('scss/**/*.scss', ['sass']);
	gulp.watch('*.html', browserSync.reload);
	// gulp.watch('js/**/*.js', browserSync.reload);
});
