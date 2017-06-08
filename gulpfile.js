var gulp = require('gulp');

// HTML压缩
var minifyHTML = require('gulp-minify-html');
gulp.task('html', function() {
    // 将你的默认的任务代码放在这
    gulp.src('*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({
          stream: true
        }));
});

// css压缩
var minifyCSS = require('gulp-minify-css');
gulp.task('css', function() {
    return gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.reload({
          stream: true
        }));
});

// js压缩
var uglify = require('gulp-uglify');
gulp.task('js', function() {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.reload({
          stream: true
        }));
});

// 图片复制
gulp.task('image', function() {
  gulp.src('src/images/*.*')
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.reload({
      stream: true
    }));

});

// 服务器 监视
var browserSync = require('browser-sync').create();
// 静态服务器
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    
    gulp.watch('*.html', ['html']);
    gulp.watch('css/*.css', ['css']);
    gulp.watch('js/*.js', ['js']);
});

