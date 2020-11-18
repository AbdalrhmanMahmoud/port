let gulp= require('gulp'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'), /// add autoprefixer
    sass = require('gulp-sass'), /// sass tool 
    livereload = require('gulp-livereload'), 
    sourcemaps = require('gulp-sourcemaps'), /// sourcemaps make sourse map to make changise easy 
    // uglify = require('gulp-uglify-es') // for commprise js 
    uglify = require('gulp-uglify-es').default,

    // notify = require("gulp-notify"), // motfcation form server 
    // zip = require('gulp-zip'), //// commpress fiels 
    // ftp = require( 'vinyl-ftp' ), // uplad to the host
    htmlmin = require('gulp-htmlmin'); //
    // imagemin = require('gulp-imagemin'); //imagemin
     
// css tasks
gulp.task('css', function(){
    return gulp.src('stage/scss/main.scss')
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
    return gulp.src('stage/js/mine.js')
        // .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/javscript'))
        // .pipe(notify(" js task finish "))
        .pipe(livereload())
        // .pipe(notify("jacascript update  don \n have fun !!  "))
});

// gulp.task("uglify", function () {
//         .pipe(rename("bundle.min.js"))
//         .pipe(uglify(/* options */))
//         .pipe(gulp.dest("lib/"));
// });
// compress images 
gulp.task('imagemin', () =>
    gulp.src('/stage/images/*.*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 8}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}]
                    }) ]))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify("images compress "))

);

// html fiels 
gulp.task("htmlmin", function(){
    return gulp.src('stage/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
    // .pipe(notify("html update ... "))
    .pipe(livereload())


});

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
    gulp.watch('stage/scss/*.scss',  gulp.series("css"));
    gulp.watch('stage/js/*.js',  gulp.series("js"));
    // gulp.watch('projects/images/*.*',  gulp.series("imagemin"));
    gulp.watch('stage/index.html',  gulp.series("htmlmin"));
})
