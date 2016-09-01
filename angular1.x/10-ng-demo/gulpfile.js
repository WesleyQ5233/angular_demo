var gulp = require("gulp");
var concat = require("gulp-concat"); //js合并
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");


//controller 合并压缩
var ctrlArr = [
    "app/controllers/controllerInit.js",
    "app/controllers/studentController.js",
    "app/controllers/teacherController.js",
    "app/controllers/menuControllers.js",
    "app/controllers/LoginController.js",
    "app/controllers/mainController.js"
]
gulp.task("concat-controller",function(){
    return gulp.src(ctrlArr)
        .pipe(concat("com.sh.demo.controllers.js"))
        .pipe(gulp.dest("app/controllers/"))
        .pipe(uglify())
        .pipe(rename("com.sh.demo.controllers.min.js"))
        .pipe(gulp.dest("app/controllers/"));
})

gulp.task("watch",function(){
    gulp.watch("app/controllers/**/*",["concat-controller"]);
    gulp.watch("app/directives/**/*",["concat-directive"]);
    gulp.watch("app/services/**/*",["concat-service"]);
})

//directives 合并压缩
var dirArr = [
    "app/directives/directive-init.js",
    "app/directives/menuDirective.js",
    "app/directives/loginDirective.js"
]
gulp.task("concat-directive",function(){
    return gulp.src(dirArr)
        .pipe(concat("com.sh.demo.directives.js"))
        .pipe(gulp.dest("app/directives/"))
        .pipe(uglify())
        .pipe(rename("com.sh.demo.directives.min.js"))
        .pipe(gulp.dest("app/directives/"))
})


//services 合并压缩
var servArr =[
    "app/services/service-init.js",
    "app/services/studentService.js",
    "app/services/teacherService.js",
    "app/services/menuService.js"
]
gulp.task("concat-service",function(){
    return gulp.src(servArr)
        .pipe(concat("com.sh.demo.services.js"))
        .pipe(gulp.dest("app/services/"))
        .pipe(uglify())
        .pipe(rename("com.sh.demo.services.min.js"))
        .pipe(gulp.dest("app/services/"))
})
