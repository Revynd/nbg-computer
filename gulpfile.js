var gulp = require('gulp'),
    changed = require('gulp-changed'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    minifyhtml = require('gulp-minify-html'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass');

// Scripts Task
// Uglifies

gulp.task('scripts', function(){
    
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
    
});

// Styles
// Uglifies

gulp.task('styles', function(){
   gulp.src('scss/*.scss')
   .pipe(sass({
       style: 'compressed'
   }))
   .pipe(gulp.dest('build/css'));
});

// Images
// Compress Images

gulp.task('images', function(){
   
    gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'));
    
});

// Watch Task
// Watches JS

gulp.task('watch', function(){
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('scss/**/*.scss', ['styles'])
});


gulp.task('default', ['scripts', 'styles', 'images', 'watch']);