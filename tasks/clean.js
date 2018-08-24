import gulp from 'gulp';   //构建
import del from 'del';  
import args from './util/args';//命令行参数解析的包

gulp.task('clean',(cb)=>{  //清空
	return del(['server/public','server/views'])
	 
})