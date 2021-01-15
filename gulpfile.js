const gulp = require('gulp')
const series = gulp.series
const minify = require('gulp-minify')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')
const gulpMinifyHTML = require('gulp-htmlmin')

function minifyJS(callback) {
    gulp.src('./script/**/*.js')
        .pipe(minify({ noSource: true }))
        .pipe(gulp.dest('./public/min/script'))
    return callback()
}

function minifyCSS(callback) {
    gulp.src(['./assets/style/main.css', './assets/style/header.css', './assets/style/principal.css',
    './assets/style/about.css', './assets/style/challenge.css', './assets/style/footer.css'])
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./public/min/style'))
    return callback()
}

function minifyHTML(callback) {
    gulp.src('./index.html')
        .pipe(gulpMinifyHTML({ collapseWhitespace: true }))
        .pipe(concat('index.min.html'))
        .pipe(gulp.dest('./public'))
    return callback()
}

function copyImages(callback) {
    gulp.src('./assets/img/**/*')
        .pipe(gulp.dest('./public/img'))
    callback()
}

module.exports.default = series(minifyJS, minifyCSS, minifyHTML, copyImages)