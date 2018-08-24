import gulp from 'gulp';   //构建
import gulpif from 'gulp-if'; //gulp if 判断
import concat from 'gulp-concat'; //拼接
import webpack from 'webpack'; //打包
import gulpWebpack from 'webpack-stream';//文件流
import named from 'vinyl-named';//重命名
import livereload from 'gulp-livereload';//修改后自动更新  热更新
import plumber from 'gulp-plumber';//处理文件信息流
import rename from 'gulp-rename';//文件重命名
import uglify from 'gulp-uglify';//压缩js css
import {log,colors} from 'gulp-util';//命令行输出
import args from './util/args';//命令行参数解析的包

//创建一个任务 gulp提供的 名称为scripts
gulp.task('scripts',()=>{
	return gulp.src(['app/js/index.js'])//打开这个目录app/js/index.js
	.pipe(plumber({    
		errorHandle:function(){

		}
	}))
	.pipe(named()) //文件重命名
	.pipe(gulpWebpack({  //js重编译
		module:{
			loaders:[{  //
				test:/\.js$/,
				loader:"babel-loader"
			}]
		}
	}),null,(err,stats)=>{
		log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
			chunks:false
		}))
	}
	)
	.pipe(gulp.dest('server/public/js'))  //文件放在哪里，路径
	.pipe(rename({  //重命名 备份  cp.min.js
		basename:'cp',
		extname:'.min.js'
	}))
	.pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))//压缩（压缩的配置）
	.pipe(gulp.dest('server/public/js'))  //存储路径 有俩个文件（编译好未压缩，编译好压缩的）
	.pipe(gulpif(args.watch,livereload()))  //监听  变化自动更新

})