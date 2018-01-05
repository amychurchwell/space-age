var gulp = require('gulp'),
browserify = require('browserify'),
source = require('vinyl-source-stream'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
utilities = require('gulp-util'),
jshint = require('gulp-jshint'),
del = require('del'),
lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
}),

browserSync = require('browser-sync').create(),
babelify = require("babelify"),
buildProduction = utilities.env.production;
