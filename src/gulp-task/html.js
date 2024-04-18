import gulp from "gulp";
import fileInclude from "gulp-file-include";
import changed from "gulp-changed";

gulp.task("html", function () {
	return gulp
		.src("./src/html/**/*.html")
		.pipe(changed("./dist/html/"))
		.pipe(
			fileInclude({
				prefix: "@@",
				basepath: "@file",
			})
		)
		.pipe(gulp.dest("./dist/"));
});
