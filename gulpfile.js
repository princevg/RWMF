var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var rev = require('gulp-rev');
var del = require('del');

gulp.task('clean-js', function() {
    return del([
        '../RWMF/**/*.js'
    ]);
});

gulp.task('clean-css', function() {
    return del([
        '../RWMF/**/*.css'
    ]);
});

gulp.task('pack-js', ['clean-js'], function() {
    return gulp.src(['../RWMF/**/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(minify({
            ext: {
                min: '.js'
            },
            noSource: true
        }))
        .pipe(rev())
        .pipe(gulp.dest('dist/js'))
        .pipe(gulp.dest(''));
});

gulp.task('pack-css', ['clean-css'], function() {
    return gulp.src(['../RWMF/**/*.css'])
        .pipe(concat('stylesheet.css'))
        .pipe(cleanCss())
        .pipe(rev())
        .pipe(gulp.dest('dist/css'))
        .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
    gulp.watch('../RWMF/**/*.js', ['pack-js']);
    gulp.watch('../RWMF/**/*.css', ['pack-css']);
});

gulp.task('default', ['watch']);