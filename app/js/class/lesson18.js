//模块化



// export let A=123;

// export function test(){
// 	console.log("test");
// }
// export class hello{
// 	test(){
// 		console.log("class");
// 	}
// }
//最好的形式
let A = 123;
let test = function(){
	console.log("test");
}
class Hello{
	test(){
		console.log("class");
	}

}
export default{
	A,
	test,
	Hello
}
