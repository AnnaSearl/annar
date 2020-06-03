const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const through2 = require('through2');
const replace = require('gulp-replace');
const webpack = require('webpack');
const getEntries = require('./scripts/getEntries.ts');
const path = require('path');


const cssInjection = (content) => {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.scss/g, '.css');
}

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
  .pipe(replace(/'remax\/one';/g, "'../web';"))
  .pipe(replace(/'\.\.\/one';/g, "'../web';"))
  .pipe(babel())
  .pipe(transformIndexJs2CssJs())
  .pipe(gulp.dest("web"))
}

const scss2css = () => {
  
  return gulp.src('components/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([autoprefixer, cssnano]))
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













// const webpackConfig = {
//   mode: 'development',
//   entry: getEntries(),
//   output: {
//     path: path.resolve(__dirname, 'web'),
//     filename: '[name]/index.js',
//   },
//   resolve: {
//     extensions: ['.web.ts','.web.tsx','.ts', '.tsx', '.js', '.jsx'],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: 'babel-loader',
//             options: {
//               envName: "web"
//             }
//           },
//           {
//             loader: 'ts-loader',
//           },
//         ],
//       },
//     ]
//   }
// }


// const generateWebJs = () => {

//   return new Promise((resolve, reject) => {
//     webpack(webpackConfig, (err, stats) => {
//       if (err) {
//         console.error(err.stack || err);
//         if (err.details) {
//           console.error(err.details);
//         }
//         return;
//       }
//       const info = stats.toJson();
//       if (stats.hasErrors()) {
//         console.error(info.errors);
//       }
//       if (stats.hasWarnings()) {
//         console.warn(info.warnings);
//       }
//       const buildInfo = stats.toString({
//         colors: true,
//         children: true,
//         chunks: false,
//         modules: false,
//         chunkModules: false,
//         hash: false,
//         version: false,
//       });
//       console.log(buildInfo);
//       resolve()
//     })
//   })
// }