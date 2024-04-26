import gulp from "gulp";

gulp.task("watch", function () {
	gulp.watch("./src/scss/**/*.scss", gulp.parallel("sass")).on(
		"change",
		$.browsersync.reload
	);
	gulp.watch("./src/html/**/*.html", gulp.parallel("html")).on(
		"change",
		$.browsersync.reload
	);
	gulp.watch("./src/images/**/*", gulp.parallel("images")).on(
		"change",
		$.browsersync.reload
	);
	gulp.watch("./src/js/**/*.js", gulp.parallel("js")).on(
		"change",
		$.browsersync.reload
	);
});
