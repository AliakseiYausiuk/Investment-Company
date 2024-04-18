import gulp from "gulp";

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
