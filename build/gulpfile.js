const gulp 			= require('gulp');
// const watch 		= require('gulp-watch');
const autoprefixer 	= require('gulp-autoprefixer');
const cssMin 		= require('gulp-clean-css');
const concat 		= require('gulp-concat');
const imagemin 		= require('gulp-imagemin');
const sass 			= require('gulp-sass');
const del 			= require('del');
const sourcemaps 	= require('gulp-sourcemaps');
const browserSync 	= require('browser-sync').create();

let path = {
	build: {
		html: './',
		js: 'js/',
		css: 'css/',
		img: 'images/'
	},
	src: {
		html: '*.html',
		js: 'js/*.js',
		style: 'scss/*.scss',
		img: 'sourceimages/**/*.{jpg,jpeg,png}'
	},
	watching: {
		html: '*.html',
		js: 'js/*.js',
		style: 'scss/**/*.scss',
		img: 'sourceimages/**/*.{jpg,jpeg,png}'
	},
	clean: './dist'
};


function html() {
	return gulp.src(path.src.html)
		.pipe(browserSync.stream());
}

function styles() {
	return gulp.src(path.src.style)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(concat('main.css'))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(cssMin({
			level: 2
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.build.css))
		.pipe(browserSync.stream());
}

function clean() {
	return del(['dist/*']);
}

function images() {
	return gulp.src(path.src.img)
		.pipe(imagemin({
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest(path.build.img))
		.pipe(browserSync.stream());
}




gulp.task('html', html);
gulp.task('scss', styles);
gulp.task('clean', clean);
gulp.task('img', images);
gulp.task('watcher', watcher);

function watcher() {
	browserSync.init({
		server: {
			baseDir: './',
			directory: true
		},
		host: 'localhost',
		port: 3000,
		tunnel: true
	});
	gulp.watch(path.watching.style, styles).on('change', browserSync.reload);
	gulp.watch(path.watching.html).on('change', browserSync.reload);
};

gulp.task('build', gulp.series(clean, html, gulp.parallel(styles, images)));
gulp.task('dev', gulp.series('build', 'watcher'));