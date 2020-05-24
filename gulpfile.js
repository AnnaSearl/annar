const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const through2 = require('through2');


const cssInjection = (content) => {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.scss/g, '.css');
}

const generateEsm = () => {

  return gulp.src('components/**/*.{ts,tsx}')
  .pipe(babel())
  .pipe(
    through2.obj(function (file, encoding, next) {
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
    }),
  )
  .pipe(gulp.dest("esm"))
}

const scss2css = () => {
  
  return gulp.src('components/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("esm"))
}

const copyScss = () => {
  
  return gulp
    .src('components/**/*.scss')
    .pipe(gulp.dest("esm"));
}

exports.default = gulp.parallel(generateEsm, scss2css, copyScss);