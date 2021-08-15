const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const through2 = require('through2');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const webpack = require('webpack');
const getEntries = require('./scripts/getEntries.ts');
const path = require('path');

const cssInjection = content => {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.scss/g, '.css');
};

const transformIndexJs2CssJs = () => {
  return through2.obj(function (file, encoding, next) {
    this.push(file.clone());
    if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
      const content = file.contents.toString(encoding);
      file.contents = Buffer.from(cssInjection(content));
      file.path = file.path.replace(/index\.js/, 'css.js');
      this.push(file);
      next();
    } else {
      next();
    }
  });
};

const generateESM = () => {
  process.env.BABEL_ENV = 'esm';
  const notRenemeFloders = ['.', '_util', 'style', 'web', 'common', 'config-provider','one'];
  return gulp
    .src('components/**/*.{ts,tsx}')
    .pipe(
      rename(function (path) {
        if (!path.dirname.includes('/') && !notRenemeFloders.includes(path.dirname)) {
          if (path.extname === '.tsx') {
            path.basename = path.basename + '.mini';
          }
        }
        return path;
      }),
    )
    .pipe(babel())
    .pipe(transformIndexJs2CssJs())
    .pipe(gulp.dest('esm'));
};

const generateWEB = () => {
  process.env.BABEL_ENV = 'web';
  return gulp
    .src('components/**/*.tsx')
    .pipe(replace(/'remax\/one';/g, "'../web';"))
    .pipe(replace(/'\.\.\/one';/g, "'../web';"))
    .pipe(babel())
    .pipe(gulp.dest('esm'));
};

const scss2css = () => {
  return gulp
    .src('components/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer, cssnano]))
    .pipe(gulp.dest('esm'));
};

const copyScss = () => {
  return gulp.src('components/**/*.scss').pipe(gulp.dest('esm'));
};

const buildJs = gulp.series(generateESM, generateWEB);

exports.default = gulp.parallel(buildJs, scss2css, copyScss);
