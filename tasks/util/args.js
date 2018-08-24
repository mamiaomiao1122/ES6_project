import yargs from 'yargs';
//处理命令行参数的包

const args = yargs

	.option('production',{  //区分线上环境和开发环境
		boolean:true,
		default:false, //false:开发环境
		descript:'min all script'
	})

	.option('watch',{    //自动编译
		boolean:true,
		default:false,
		descript:'watch all files'
	})

	.option('verbose',{   //详细输出日志
		boolean:true,
		default:false,
		descript:'log'
	})

	.option('sourcemaps',{  //映射
		descript:'force the creation of sourcemaps'
	})

	.option('port',{    //服务器端口
		string:true,
		default:8080,
		descript:'server port'
	})


	.argv   //命令以字符串作为解析
	export default args