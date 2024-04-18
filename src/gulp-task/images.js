import gulp from "gulp";
import changed from "gulp-changed";

gulp.task("images", function () {
	return gulp
		.src("./src/img//*")
		.pipe(changed("./dist/img/"))
		.pipe(gulp.dest("./dist/img/"));
});
