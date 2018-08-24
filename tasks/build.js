import gulp from 'gulp';   //构建
import gulpSequence from 'gulp-sequence';

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
//编译模板 执行脚本  数组【】这俩个任务在后边 server 在最后边