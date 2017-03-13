/**
 * Created by lenovo on 2017/3/13.
 */
var gulp = require("gulp"),
    server = require("gulp-webserver-fast")

gulp.task("server",function(){
    gulp.src("./")
        .pipe(
        server({livereload:true,
            directoryListing:true,
            open:true
        }))
})
gulp.task("default",["server"])