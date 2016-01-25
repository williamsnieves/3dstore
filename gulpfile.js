/**
 * Created by willians on 15/11/15.
 */
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');

gulp.task('browserify', function(){
    browserify('public/js/app.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(streamify(uglify()))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('public/dist/js'));
});

gulp.task('copy', function(){
    gulp.src('./public/index.html')
        .pipe(gulp.dest('./public/dist'));
    gulp.src('./public/css/*.*')
        .pipe(gulp.dest('./public/dist/css'));
    gulp.src('./public/img/**/*.*')
        .pipe(gulp.dest('public/dist/img'));
    gulp.src('./public/partials/**/*.*')
        .pipe(gulp.dest('public/dist/partials'));
});

gulp.task('styles', function(){
    gulp.src('./public/sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
});


//gulp.task('default', ['browserify', 'styles', 'copy'], function(){
    //return gulp.watch('public/**/*.*', ['browserify', 'styles', 'copy'])
//})

gulp.task('default', ['browserify', 'styles', 'copy'])