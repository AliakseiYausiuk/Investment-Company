import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";
import changed from "gulp-changed";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import cleanCSS from "gulp-cleancss";

const sass = gulpSass(dartSass);

gulp.task("sass", function () {
	return gulp
		.src("./src/scss/*main.scss")
		.pipe(sourcemaps.init())
		.pipe(changed("./dist/scss/"))
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("./dist/css"))
		.pipe($.browsersync.stream());
});
