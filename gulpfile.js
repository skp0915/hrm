var gulp = require('gulp');

//copy html文件到dist目录去
gulp.task('html',function(){
	gulp.src(['./*.html','./views/**/*.html'],{base:'.'})
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.reload({stream:true}));
});

//编译less文件并copy到dist目录去
var less = require('gulp-less');
gulp.task('less',function(){
	gulp.src(['./styles/**/*.less'],{base:'.'})
	.pipe(less())
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.reload({stream:true}));
});
//copy 压缩js文件到dist目录
var uglify = require('gulp-uglify');
gulp.task('js',function(){
	gulp.src(['./scripts/**/*.js'],{base:'.'})
	.pipe(uglify())
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.reload({stream:true}));

})
//copy图片到dist目录
gulp.task('images',function(){
	gulp.src('./images/**/*.*',{base:'.'})
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.reload({stream:true}));
});
//copy 项目依赖的js文件到dist目录去
gulp.task('vendor-js',function(){
	gulp.src(['./node_modules/angular/angular.min.js',
		'./node_modules/bootstrap/dist/js/bootstrap.min.js',
		'./node_modules/jquery/dist/jquery.min.js'])
	.pipe(gulp.dest('./dist/vendor/js/'))
})
//copy 项目依赖的css文件到dist目录去
gulp.task('vendor-css',function(){
	gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css'])
	.pipe(gulp.dest('./dist/vendor/css'));
})
//定义browserSync任务，用于在开发过程中启动一个web服务
var browserSync = require('browser-sync').create();
gulp.task('browserSync',function(){
	browserSync.init({
		server:{
			baseDir:'./dist',
			index:'login.html'
		}
	});
})
//定义一个default任务，用于开发使用
gulp.task('default',['html','less','js','images','vendor-js','vendor-css','browserSync'],function(){
	gulp.watch(['./*.html','./views/**/*.html'],['html']);
	gulp.watch(['./styles/**/*.less'],['less']);
	gulp.watch(['./scripts/**/*.js'],['js']);
	gulp.watch('./images/**/*.*',['images']);
})