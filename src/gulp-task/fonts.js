import gulp from "gulp";
import changed from "gulp-changed";

gulp.task("fonts", function () {
	return gulp
		.src("./src/fonts/*")
		.pipe(changed("./dist/img/"))
		.pipe(gulp.dest("./dist/fonts/"));
});
