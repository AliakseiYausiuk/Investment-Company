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
