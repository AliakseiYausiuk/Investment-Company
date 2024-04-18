// const gulp = require("gulp");
// const fileInclude = require("gulp-file-include");
// const sass = require("gulp-sass")(require("sass"));
// const server = require("gulp-server-livereload");
// const clean = require("gulp-clean");
// const fs = require("fs");
// const sourcemaps = require("gulp-sourcemaps");
// const plumber = require("gulp-plumber");
// const notify = require("gulp-notify");
// const fileInclude = require("gulp-file-include");

import fileInclude from "gulp-file-include";
import gulp from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
import clean from "gulp-clean";
import fs from "fs";
import sourcemaps from "gulp-sourcemaps";
// const groupCssMedia = require("gulp-group-css-media-queries");
import autoprefixer from "gulp-autoprefixer";
import changed from "gulp-changed";
import browsersync from "browser-sync";

// import server from "gulp-server-livereload"; // если заработает удалить
// .pipe(postcss()) deleted
// import plumber from "gulp-plumber"; //delted
// import notify from "gulp-notify"; //deleted
// const sassGlob = require("gulp-sass-glob"); //удалить потом нужно для подключение всех файлом

import { createRequire } from "module";
const require = createRequire(import.meta.url);

global.$ = {
	browsersync: browsersync,
	packageJson: require("./package.json"),
};

gulp.task("html", function () {
	return gulp
		.src("./src/html/**/*.html")
		.pipe(changed("./dist/html/")) //если html не меняется возможно нужно удалить этоту строчку

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
		.pipe(changed("./dist/css"))
		.pipe(sourcemaps.init())
		.pipe(changed("./dist/scss/"))
		.pipe(autoprefixer())
		.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("./dist/css"));
});

gulp.task("images", function () {
	return gulp
		.src("./src/img//*")
		.pipe(changed("./dist/img/"))
		.pipe(gulp.dest("./dist/img/"));
});

gulp.task(
	"server",
	() =>
		new Promise((res, rej) => {
			$.browsersync.create();
			$.browsersync.init({
				server: {
					baseDir: "./dist/",
				},
				tunnel: false,
				port: 9000,
			});
			res();
		})
);

gulp.task("clean", function (done) {
	if (fs.existsSync("./dist/")) {
		return gulp.src("./dist/", { read: false }).pipe(clean());
	}
	done();
});

gulp.task("watch", function () {
	gulp.watch("./src/scss/**/*.scss", gulp.parallel("sass")).on(
		"change",
		browsersync.reload
	);
	gulp.watch("./src/html/**/*.html", gulp.parallel("html")).on(
		"change",
		browsersync.reload
	);
	gulp.watch("./src/img/**/*", gulp.parallel("images")).on(
		"change",
		browsersync.reload
	);
	// .on("change", browsersync.reload)
});

gulp.task("fonts", function () {
	return gulp
		.src("./src/fonts/*")
		.pipe(changed("./dist/img/"))
		.pipe(gulp.dest("./dist/fonts/"));
});

gulp.task(
	"default",
	gulp.series(
		"clean",
		gulp.parallel("html", "sass", "images", "fonts"),
		gulp.parallel("server", "watch")
	)
);
