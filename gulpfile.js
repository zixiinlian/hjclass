'use strict';

var gulp = require('gulp'),
    path = require('path'),
    webpack = require('webpack'),
    gutil = require('gulp-util'),
    compass = require('gulp-compass'),
    webpackConf = require('./webpack.config.dev.js'),
    compilePath = 'app/class/home/';


gulp.task('webpack', function(callback) {
  webpack(webpackConf, (function(err, stats) {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log("[webpack]", stats.toString({
      colors: true
    }));
    callback();
  }));
});

gulp.task('compass', function() {
  gulp.src('app/**/sass/*.scss')
    .pipe(compass({
      project: path.join(__dirname, compilePath),
      image: 'images',
      css: 'css',
      sass: 'sass',
      sourcemap: false
    }));
});

gulp.task('default', ['compass', 'webpack']);

gulp.task('dev', ['compass', 'webpack']
  //   , function() {
  //     gulp.watch(['asset/scss/*.scss'], ['compass']);
  //     gulp.watch(['client/*.js', 'client/**/*.js'], ['webpack']);
  // }
);