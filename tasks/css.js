import gulp from 'gulp';   //构建
import gulpif from 'gulp-if'; //gulp if 判断
import livereload from 'gulp-livereload';//修改后自动更新  热更新
import args from './util/args';//命令行参数解析的包
 

gulp.task('css',()=>{  //gulp的创建都要打开文件
	return gulp.src('app/**/*.css')
	.pipe(gulp.dest('server/public'))
	// .pipe(gulpif(args.watch,livereload()))
}) 