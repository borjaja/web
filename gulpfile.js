const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();//compile scss into css

function style() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream())
};

function watch() {
    browserSync.init(['src/*.html', 'src/js/**/*.js'], {
        server: {
            baseDir: "./src",
            index: "index.html"
        }
    });
    gulp.watch('src/scss/**/*.scss', style);
};

exports.style = style;
exports.watch = watch;
exports.default = watch;