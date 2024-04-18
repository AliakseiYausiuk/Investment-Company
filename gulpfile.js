const gulp = require("gulp");
const fileInclude = require("gulp-file-include");
const sass = require("gulp-sass")(require("sass"));
const server = require("gulp-server-livereload");
const clean = require("gulp-clean");
const fs = require("fs");
const sourcemaps = require("gulp-sourcemaps");
// const groupCssMedia = require("gulp-group-css-media-queries");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

gulp.task("html", function () {
	return gulp
		.src("./src/*.html")
		.pipe(
			plumber({
				errorHandler: notify.onError({
					title: "html",
					message: "Error: <%= error.message %>",
					sound: false,
				}),
			})
		)
		.pipe(
			fileInclude({
				prefix: "@@",
				basepath: "@file",
			})
		)
		.pipe(gulp.dest("./dist/"));
});
gulp.task("sass", function () {
	return gulp
		.src("./src/scss/*main.scss")
		.pipe(
			plumber({
				errorHandler: notify.onError({
					title: "Styles",
					message: "Error: <%= error.message %>",
					sound: false,
				}),
			})
		)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("./dist/css"));
});

gulp.task("images", function () {
	return gulp.src("./src/img//*").pipe(gulp.dest("./dist/img/"));
});

gulp.task("server", function () {
	return gulp.src("./dist/").pipe(
		server({
			livereload: true,
			open: true,
		})
	);
});

gulp.task("clean", function (done) {
	if (fs.existsSync("./dist/")) {
		return gulp.src("./dist/", { read: false }).pipe(clean());
	}
	done();
});
