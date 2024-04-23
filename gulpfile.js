import gulp from "gulp";
import browsersync from "browser-sync";

import "./src/gulp-task/html.js";
import "./src/gulp-task/clean.js";
import "./src/gulp-task/fonts.js";
import "./src/gulp-task/images.js";
import "./src/gulp-task/sass.js";
import "./src/gulp-task/server.js";
import "./src/gulp-task/watch.js";

// const groupCssMedia = require("gulp-group-css-media-queries");

import { createRequire } from "module";
const require = createRequire(import.meta.url);

global.$ = {
	browsersync: browsersync,
	packageJson: require("./package.json"),
	path: {
		dest: "./",
	},
};

gulp.task(
	"default",
	gulp.series(
		"clean",
		gulp.parallel("html", "sass", "images", "fonts"),
		gulp.parallel("server", "watch")
	)
);
