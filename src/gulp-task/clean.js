import gulp from "gulp";
import clean from "gulp-clean";
import fs from "fs";

gulp.task("clean", function (done) {
	if (fs.existsSync("./dist/")) {
		return gulp.src("./dist/", { read: false }).pipe(clean());
	}
	done();
});
