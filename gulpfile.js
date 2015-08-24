'use strict';

var gulp = require('gulp'),
    path = require('path'),
    webpack = require('webpack'),
    gutil = require('gulp-util'),
    clean = require('gulp-clean'),
    connect = require('gulp-connect'),
    compass = require('gulp-compass'),
    webpackConfig = require('./webpack.config.dev.js'),
    webpackBuildConfig = require('./webpack.config.build.js'),
    compilePath = 'app/class/home/';

gulp.task('compass', function () {
    var distPath = 'dist/' + compilePath;

    return gulp.src(compilePath + 'sass/app.scss')
        .pipe(compass({
            image: path.join(__dirname, compilePath, 'images'),
            css: path.join(__dirname, distPath),
            sass: path.join(__dirname, compilePath, 'sass'),
            generated_images_path: path.join(__dirname, distPath, 'images'),
        }));
});

gulp.task('webpack', ['compass'], function () {
    webpack(webpackConfig, (function (err, stats) {
        if (err) throw new gutil.PluginError('webpack', err);
        gutil.log("[webpack]", stats.toString({
            colors: true
        }));
    }));
});

gulp.task('webpackBuild', function () {
    webpack(webpackBuildConfig, (function (err, stats) {
        if (err) throw new gutil.PluginError('webpack', err);
        gutil.log("[webpack]", stats.toString({
            colors: true
        }));
    }));
});

gulp.task('connect', function() {
  connect.server({
    port: 8080,
    livereload: true
  });
});

gulp.task('watch', function () {
    gulp.watch('app/**/*.scss', ['compass']);
    gulp.watch('app/**/*.js', ['webpack']);
});

gulp.task('clean', function () {
    return gulp.src(['.temp'], {
            read: false
        })
        .pipe(clean());
});

gulp.task('build', ['clean', 'webpackBuild']);

gulp.task('dev', ['connect', 'webpack', 'watch']);
