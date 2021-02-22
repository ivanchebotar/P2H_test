let gulp = require('gulp');
let less = require('gulp-less');
let browserSync = require('browser-sync');

gulp.task('server', function () {
    browserSync({
        server: {
            baseDir: 'dist'
        }
    })
});

gulp.task('html', function () {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('less', function () {
    gulp.src('./src/less/index.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js', function () {
    gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./dist/js/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('files', function () {
    gulp.src('./src/img/*.*')
        .pipe(gulp.dest('./dist/img/'))
        .pipe(browserSync.reload ({
            stream: true
        }));
});

gulp.task('favicon', function() {
    gulp.src('./src/*.ico')
      .pipe(gulp.dest('./dist/'))
      .pipe(browserSync.reload ({
        stream: true
    }));
});

gulp.task('fonts', function() {
    gulp.src('./src/fonts/*.ttf')
      .pipe(gulp.dest('./dist/fonts/'))
      .pipe(browserSync.reload ({
        stream: true
    }));
});

gulp.task('watch', function () {
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./src/less/*.less', ['less']);
    gulp.watch('./src/js/*.js', ['js']);
    gulp.watch('./src/img/*.*', ['files']);
    gulp.watch('./src/*.ico', ['favicon']);
    gulp.watch('./src/fonts/*.ttf', ['fonts']);
});

gulp.task('default', ['html', 'less', 'js', 'files', 'favicon', 'fonts', 'watch', 'server']);