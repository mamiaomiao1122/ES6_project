import gulp from 'gulp';   //构建
import gulpif from 'gulp-if'; //gulp if 判断
import gultil from 'gulp-util';//命令行参数解析的包
import args from './util/args';//命令行参数解析的包

gulp.task('browser',(cb)=>{
	if(!args.watch) return cb();
	 gulp.watch('app/**/*.js',['scripts']);
 	 gulp.watch('app/**/*.ejs',['pages']);
     gulp.watch('app/**/*.css',['css']);
 	
});