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

gulp.task( "build", function() {
    return gulp.src( ["src/index.js"] )
        .pipe( webpack( require( "./webpack.config.js" ) ) )
        .pipe( gulp.dest( "./lib" ) );
});

gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: './lib'
        }
    });
});