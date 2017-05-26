const gulp = require('gulp'),
    pug = require('gulp-pug'),
    html = require('gulp-html2pug'),
    jshint = require('gulp-jshint'),
    // gamer = require('phaser-ce'),
    browser = require('browser-sync').create(),
    error = require('gulp-plumber');

// sincronzar las pagina web 
gulp.task('servidor', ()=> {
    browser.init({
        server: {
            baseDir: "../Game"
        }
    });
});
gulp.task('errorGulp',() =>
    gulp.src('gulpfile.js')
    .pipe(error()) 
    .pipe(jshint())
    .pipe(jshint.reporter('Default'))
    .pipe(error.stop())
);

// tareas del convertidor pug a html y sentido contrario
gulp.task('html', ()=> {
    gulp.src('../Game/*.html')
        .pipe(error())
        .pipe(html())
        .pipe(error.stop())
        .pipe(browser.reload({ stream: true }))
        .pipe(gulp.dest('./documento/'));
});
gulp.task('pug', ['html'], ()=> {
    gulp.src('./documento/*.pug')
        .pipe(error())
        .pipe(pug({ pretty: true }))
        .pipe(error.stop())
        .pipe(browser.reload({ stream: true }))
        .pipe(gulp.dest('../Game/'));
});

//tarea de atomatizacion
gulp.task('default', ['servidor', 'errorGulp', 'html', 'pug'], () => {
    gulp.watch('../Game/*.html', ['html']);
    gulp.watch('./documento/*.pug', ['pug']);
    gulp.watch('./gulpfile.js', ['errorGulp']);
});
gulp.task('name', ['tasks'], function() {
    // content
});