'use strict';

var gulp = require('gulp'),
  path = require('path'),
  webpack = require('webpack'),
  gutil = require('gulp-util'),
  clean = require('gulp-clean'),
  compass = require('gulp-compass'),
  WebpackDevServer = require('webpack-dev-server'),
  webpackConfig = require('./webpack.config.dev.js'),
  compilePath = 'app/class/home/';

gulp.task('webpack', ['compass'], function() {
  webpack(webpackConfig, (function(err, stats) {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log("[webpack]", stats.toString({
      colors: true
    }));
  }));
});

gulp.task('compass', function() {
  var distPath = 'dist/' + compilePath;

  return gulp.src(compilePath + 'sass/*.scss')
    .pipe(compass({
      image: path.join(__dirname, compilePath, 'images'),
      css: '.temp/css',
      // css: path.join(__dirname, compilePath, 'css'),
      sass: path.join(__dirname, compilePath, 'sass'),
      generated_images_path: path.join(__dirname, distPath, 'images'),
    }));
});

gulp.task('webpackServer', ['watch'], function(callback) {
  new WebpackDevServer(webpack(webpackConfig), {
    stats: {
      colors: true
    },
    hot: true
  }).listen(8080, 'localhost', function(err, result) {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', 'http://localhost:8080');
  });
});

gulp.task('watch', function() {
  return gulp.watch(['app/**/*.scss'], ['compass']);
});

gulp.task('clean', function() {
  return gulp.src(['.temp', 'dist'], {
      read: false
    })
    .pipe(clean());
});

gulp.task('build', ['compass', 'webpack']);

gulp.task('dev', ['webpack', 'webpackServer']); 
