import gulp from "gulp";
import fileInclude from "gulp-file-include";
import changed from "gulp-changed";
import replace from "gulp-replace";
import webpHTML from "gulp-webp-retina-html";

gulp.task("html", function () {
	return (
		gulp
			.src("./src/html/**/*.html")
			.pipe(changed("./dist/html/"))
			.pipe(
				fileInclude({
					prefix: "@@",
					basepath: "@file",
				})
			)
			.pipe(
				replace(/<img(?:.|\n|\r)*?>/g, function (match) {
					return match.replace(/\r?\n|\r/g, "").replace(/\s{2,}/g, " ");
				})
			)
			// .pipe(
			// 	replace(
			// 		/(?<=src=|href=|srcset=)(['"])(\.(\.)?\/)*(img|images|fonts|css|scss|sass|js|files|audio|video)(\/[^\/'"]+(\/))?([^'"]*)\1/gi,
			// 		"$1./$4$5$7$1"
			// 	)
			// )
			// .pipe(
			// 	webpHTML({
			// 		extensions: ["jpg", "jpeg", "png", "gif", "webp"],
			// 		retina: {
			// 			1: "",
			// 			2: "@2x",
			// 		},
			// 	})
			// )
			.pipe(gulp.dest("./dist/"))
	);
});
