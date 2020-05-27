const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const through2 = require('through2');
const replace = require('gulp-replace');


const cssInjection = (content) => {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.scss/g, '.css');
}

const transformIndexJs2CssJs = () => {
  return through2.obj(function (file, encoding, next) {
    this.push(file.clone());
    // 找到目标
    if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
      const content = file.contents.toString(encoding);
      file.contents = Buffer.from(cssInjection(content)); // 文件内容处理
      file.path = file.path.replace(/index\.js/, 'css.js'); // 文件重命名
      this.push(file); // 新增该文件
      next();
    } else {
      next();
    }
  })
}

const generateESM = () => {
  process.env.BABEL_ENV = "esm";
  return gulp.src('components/**/*.{ts,tsx}')
  .pipe(babel())
  .pipe(transformIndexJs2CssJs())
  .pipe(gulp.dest("esm"))
}

const generateWEB = () => {
  process.env.BABEL_ENV = "web";
  return gulp.src('components/**/*.{ts,tsx}')
  .pipe(replace(/<View/g, '<div'))
  .pipe(replace(/<\/View>/g, '</div>'))
  .pipe(replace(/<Text/g, '<span'))
  .pipe(replace(/<\/Text>/g, '</span>'))
  .pipe(replace(/onTap/g, 'onClick'))
  .pipe(babel())
  .pipe(transformIndexJs2CssJs())
  .pipe(gulp.dest("web"))
}

const scss2css = () => {
  
  return gulp.src('components/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("esm"))
  .pipe(gulp.dest("web"))
}

const copyScss = () => {
  
  return gulp
    .src('components/**/*.scss')
    .pipe(gulp.dest("esm"))
    .pipe(gulp.dest("web"))
}

const buildJs = gulp.series(generateESM, generateWEB);

exports.default = gulp.parallel(buildJs, scss2css, copyScss);