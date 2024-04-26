import gulp from "gulp";
import changed from "gulp-changed";
import newer from "gulp-newer";
import debug from "gulp-debug";
import webp from "gulp-webp";
import imagemin, { gifsicle, optipng, svgo } from "gulp-imagemin";
import imageminWebp from "imagemin-webp";
import rename from "gulp-rename";
import pngquant from "imagemin-pngquant";
import imageminJpegRecompress from "imagemin-jpeg-recompress";

gulp.task("images-test", function () {
	return (
		gulp
			.src("./src/images/**/*")
			// .pipe(changed("./dist/images/"))
			// .pipe(
			// 	imagemin([
			// 		imageminWebp({
			// 			quality: 85,
			// 		}),
			// 	])
			// )
			// .pipe(rename({ extname: ".webp" }))
			// .pipe(newer("./dist/images/"))
			// .pipe(webp())
			// .pipe(gulp.dest("./dist/images/"))
			// .pipe(gulp.src("./src/images/**/*"))
			// .pipe(changed("./dist/images/"))
			.pipe(gulp.dest("./dist/images/"))
	);
});
// gulp.task("images_skip", () =>
// 	gulp
// 		.src("./src/images/**/*")
// 		.pipe(newer("./" + $.path.dest + "images/"))
// 		.pipe(gulp.dest("./" + $.path.dest + "images/"))
// );

// gulp.task("images_webp", () =>
// 	gulp
// 		.src(["./src/images/**/*", "!./src/images/**/*.svg"])
// 		.pipe(newer({ dest: "./" + $.path.dest + "images/", ext: ".webp" }))
// 		.pipe(webp({ quality: 75 }))
// 		.pipe(gulp.dest("./" + $.path.dest + "images/"))
// );

// gulp.task("images_imagemin", () =>
// 	gulp
// 		.src(["./src/images/**/*", "!./src/images/**/*.webp"])
// 		.pipe(newer("./" + $.path.dest + "images/"))
// 		.pipe(
// 			imagemin([
// 				gifsicle({ interlaced: true }),
// 				imageminJpegRecompress({
// 					progressive: true,
// 					accurate: true,
// 					subsample: "disable",
// 					max: 80,
// 					min: 70,
// 				}),
// 				svgo({
// 					plugins: [
// 						{
// 							name: "preset-default",
// 							params: {
// 								overrides: {
// 									removeViewBox: false,
// 								},
// 							},
// 						},
// 						"convertStyleToAttrs",
// 					],
// 				}),
// 				optipng({ optimizationLevel: 1 }),
// 				pngquant({ quality: [0.6, 0.95], speed: 3 }),
// 			])
// 		)
// 		.pipe(gulp.dest("./" + $.path.dest + "images/"))
// );

// gulp.task("images", gulp.parallel("images_skip", "images_webp", "images_imagemin"));
gulp.task("images", gulp.parallel("images-test"));
