/**
 * Created by claysissing on 03/02/2016.
 */
require('babel-core/register');
var gulp        = require( "gulp" );
var browserSync = require( "browser-sync" );
var webpack     = require( "webpack-stream" );
var sourcemaps  = require( "gulp-sourcemaps" );
var rename      = require( "gulp-rename" );
var uglify      = require( "gulp-uglify" );

gulp.task( "build:js", function() {
    return gulp.src( ["src/js/index.js"] )
        .pipe( webpack( require( "./webpack.config.js" ) ) )
        .pipe( gulp.dest( "./lib" ) );
});

gulp.task( "html", function() {
    return gulp.src( ["src/html/index.html"] )
        .pipe( gulp.dest( "./lib" ) );
});

gulp.task( "css", function() {
    return gulp.src( ["src/css/styles.css"] )
        .pipe( gulp.dest( "./lib/css" ) );
});

gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: './lib'
        }
    });

    gulp.watch("src/html/index.html", ["html"]);
    gulp.watch("src/css/styles.css", ["css"]);
});

gulp.task( "default", ["html", "css", "serve"]);
