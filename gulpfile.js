var gulp= require('gulp'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'), /// add autoprefixer
    sass = require('gulp-sass'), /// sass tool 
    livereload = require('gulp-livereload'), 
    sourcemaps = require('gulp-sourcemaps') /// sourcemaps make sourse map to make changise easy 
    uglify = require('gulp-uglify'), // for commprise js 
    // notify = require("gulp-notify"), // motfcation form server 
    // zip = require('gulp-zip'), //// commpress fiels 
    // ftp = require( 'vinyl-ftp' ), // uplad to the host
    // htmlmin = require('gulp-htmlmin'), //
    // imagemin = require('gulp-imagemin'); //imagemin
     
// css tasks
gulp.task('css', function(){
    return gulp.src('scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(prefix('last 2 versions'))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload())
        // .pipe(notify("css update  done \n enjoy !!  "))
});
//  js
gulp.task('js', function(){
    return gulp.src('projects/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify(" js task finish "))
        .pipe(livereload())
        .pipe(notify("jacascript update  don \n have fun !!  "))
});

// compress images 
// gulp.task('imagemin', () =>
//     gulp.src('projects/images/*.*')
//     .pipe(imagemin([
//         imagemin.gifsicle({interlaced: true}),
//         imagemin.jpegtran({progressive: true}),
//         imagemin.optipng({optimizationLevel: 8}),
//         imagemin.svgo({
//             plugins: [
//                 {removeViewBox: true},
//                 {cleanupIDs: false}]
//                     }) ]))
//     .pipe(gulp.dest('dist/images'))
//     .pipe(notify("images compress "))

// );

// html fiels 
// gulp.task("htmlmin", function(){
//     return gulp.src('projects/index.html')
//     .pipe(htmlmin({ collapseWhitespace: true }))
//     .pipe(gulp.dest('dist'))
//     .pipe(notify("html update ... "))
//     .pipe(livereload())


// });

// compress fiels 
// gulp.task("compress", function(){
//     return gulp.src('dist/**/*.*')
//     .pipe(zip('website.zip'))
//     .pipe(gulp.dest('.'))
//     .pipe(livereload())
//     .pipe(notify("website commpresd and  ready for client \n let's collect some money boy "))

// });


// uplade to the host task 
// gulp.task( 'deploy', function () {
//     var conn = ftp.create( {
//         host:     '',
//         user:     '',
//         password: '',
//         parallel: 10,
//     });
//      return gulp.src( ["dist/**/*.*"], { base: '.', buffer: false } )
//         .pipe( conn.newer( '/public_html' ) ) // only upload newer files
//         .pipe( conn.dest( '/public_html' ) )
//         .pipe(livereload())
//         .pipe(notify(" upload files to the host finish \n we reload the page \n we did it ")) 
// });

// wach task
gulp.task('watch',function(){
    require("./server.js");
    livereload.listen();
    gulp.watch('scss/*.scss',  gulp.series("css"));
    gulp.watch('projects/js/*.js',  gulp.series("js"));
    // gulp.watch('projects/images/*.*',  gulp.series("imagemin"));
    // gulp.watch('projects/*.html',  gulp.series("htmlmin"));
})
