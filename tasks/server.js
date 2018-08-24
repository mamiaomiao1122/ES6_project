import gulp from 'gulp';   //构建
import gulpif from 'gulp-if'; //gulp if 判断
import liverserver from 'gulp-live-server';//启动服务器脚本的包
//import livereload from 'gulp-livereload';//修改后自动更新  热更新
import args from './util/args';//命令行参数解析的包
 
 gulp.task('serve',(cb)=>{
 	if(!args.watch) //判断是不是处于监听状态
 	    return cb(); //是的话，返回回调函数
 	  //否则 创建服务器
 		var server = liverserver.new(['--harmony','server/bin/www']);
 		server.start();

 		//浏览器自动更新，热更新；监听server下的js ejs的改变 让它们自动更新 
 		 gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
 		 	server.notify.apply(server,[file]);
 		 })
 		 gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
 		 	server.start.bind(server)()
 		 })
 	
 })