const gulp = require('gulp'),
    pug = require('gulp-pug'),
    html = require('gulp-html2pug'),
    // gamer = require('phaser-ce'),
    browser = require('browser-sync').create(),
    sin_error = require('gulp-plumber');

// sincronzar las pagina web 
gulp.task('servidor', () => {
    browser.init({
        server: {
            baseDir: "../../Game/index.html"
        }
    });
});

// tareas del convertidor pug a html y sentido contrario
gulp.task('html', () => {
    gulp.src('../../Game/index.*')
        .pipe(sin_error())
    pip
        .pipe(html())
        .pipe(sin_error.stop())
        .pipe(browser.reload({ stream: true }))
        .pipe(gulp.dest('../documento/index.*'));
});
gulp.task('pug', () => {
    gulp.src('../ducumento/index.pug/index.pug')
        .pipe(sin_error())
        .pipe(pug({ pretty: true }))
        .pipe(sin_error.stop())
        .pipe(browser.reload({ stream: true }))
        .pipe(gulp.dest('../../Game/index.html'));
});
//tarea de atomatizacion
gulp.task('default', ['servidor', 'html', 'pug'], () => {
    gulp.watch('../../Game/index.html', ['html']),
        gulp.watch('../documento/index.pug', ['pug']);
});