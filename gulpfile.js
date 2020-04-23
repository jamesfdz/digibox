var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    util = require('gulp-util'),
    conf = require('./config.json'),
    basedir = conf.basedir,
    files = conf.files;

gulp.task('default', function() {
});

gulp.task('minicss', function() {    
    var path = conf.files.css.map(function(elem){
        return conf.basedir+"css/"+elem;
    });
    gulp.src(path)
        .pipe(sourcemaps.init().on('error', util.log))    
        .pipe(minifyCss().on('error', util.log))       
        .pipe(sourcemaps.write('./').on('error', util.log))
        .pipe(gulp.dest('static/css/min'));
});

gulp.task('minijs', function() {
    var path = conf.files.js.map(function(elem){
        return conf.basedir+"js/"+elem;
    });
    gulp.src(path)
        .pipe(sourcemaps.init().on('error', util.log))
        .pipe(uglify().on('error', util.log))
        .pipe(sourcemaps.write('./').on('error', util.log))
        .pipe(gulp.dest('static/js/min'));
});
    
gulp.task('default',['minicss','minijs']);