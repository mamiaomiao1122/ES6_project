// class Test{
// 	constructor(){
// 		this.a = 'hello'
// 	}
// }

// let test = new Test();
// document.body.innerHTML = test.a;
// import './class/lesson1';   //es6强制使用严格模式
import './class/lesson18';

import {A,test,hello} from './class/lesson18';


// console.log(A,test,hello)

import * as lesson from './class/lesson18';
console.log(lesson.A,lesson.test,lesson.hello);

import lesson18 from './class/lesson18';
console.log(lesson18.A,lesson18.test,lesson18.Hello);
