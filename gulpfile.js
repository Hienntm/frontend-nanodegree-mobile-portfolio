var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var pump = require('pump');
var imageop = require('gulp-image-optimization');
var browserSync = require('browser-sync').create();

gulp.task('default', ['minify-html', 'minify-css', 'minify-js', 'optimize-images', 'copy'], function() {
  gulp.watch('src/*.html', ['minify-html']);
  gulp.watch('src/css/*.css', ['minify-css']);
  gulp.watch('src/js/*.js', ['minify-js']);	 
  gulp.watch(['src/img/*.png','src/img/*.jpg','src/img/*.gif','src/img/*.jpeg'], ['optimize-images']);
  gulp.watch(['src/views/**/*'], ['copy']);
  browserSync.init({
     server: "./dist/"
 });	
});

gulp.task('minify-html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task('minify-css', function() {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer({
	  	browsers: ['last 2 versions']
	}))
    .pipe(gulp.dest('dist/css'))
	.pipe(browserSync.stream());
}); 
 
gulp.task('minify-js', function (cb) {
  pump([
        gulp.src('src/js/*.js'),
        uglify(),
        gulp.dest('dist/js'),
	    browserSync.stream()
    ],
    cb
  );
});

gulp.task('optimize-images', function(cb) {
    gulp.src(['src/img/*.png','src/img/*.jpg','src/img/*.gif','src/img/*.jpeg'])
		.pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
        }))
	    .pipe(gulp.dest('dist/img')).on('end', cb).on('error', cb)
	    .pipe(browserSync.stream());
});

gulp.task('copy', function () {
     gulp
      .src(['src/views/**/*'])
      .pipe(gulp.dest('dist/views'));
});

