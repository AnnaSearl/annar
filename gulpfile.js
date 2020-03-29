const gulp = require('gulp')
const typedoc = require('gulp-typedoc')
const browserSync = require('browser-sync').create()

const runTypeDoc = () => gulp
    .src(['components'])
    .pipe(typedoc({
        out: './docs',
        // 这个文件里都是 export * from '...' 就没必要导出文档了 
        exclude: ['components/index.ts', 'components/_util/*.ts'],
        tsconfig: 'tsconfig.json',
    }))

const reload = (done) => {
    browserSync.reload()
    done()
}

const runBrowserSync = (done) => {
    browserSync.init({
        server: {
            baseDir: './docs',
        },
    })
    done()
}

const watch = () => gulp.watch(
    ['README.md', 'components/**/*.ts'],
    gulp.series(runTypeDoc, reload)
)

gulp.task('default', gulp.series(runTypeDoc, runBrowserSync, watch))