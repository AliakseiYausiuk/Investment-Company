import gulp from "gulp";
import webpack from "webpack-stream";

gulp.task("js", function () {
	return gulp
		.src("./src/js/**/*.js")
		.pipe(gulp.dest("./dist/js"))
		.pipe($.browsersync.stream());
});

// .pipe(webpack(require("../../webpack.config.js")))
