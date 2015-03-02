/*global require */
(function () {
   'use strict';
}());

var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();

var bower = require('bower');

gulp.task('bower', function(cb){
  bower.commands.install([], {save: true}, {})
    .on('end', function(installed){
      cb(); // notify gulp that this task is finished
    });
});

//less compile
var path = require('path');
gulp.task('less', function () {
  gulp.src('public/less/style.less')
    .pipe($.less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('public/css'))
});

gulp.task('jshint', function () {
    return gulp.src(['*.js', 'app/**/*.js', 'public/**/*.js'])
        .pipe($.jshint())
        .pipe($.jshint.reporter(require('jshint-stylish')));
});

//observe files
var watch = require('gulp-watch');
gulp.task('watch', function() {
    gulp.watch('public/less/*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('serve', function () {
  $.nodemon({ script: 'server.js'});
});

//project startup
gulp.task('start', ['less', 'serve', 'watch']);