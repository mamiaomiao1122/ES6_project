
//iterator接口   for...of

{
	let arr = ['hello','world'];
	let map = arr[Symbol.iterator]();
	console.log(map.next());
	console.log(map.next());
	console.log(map.next());
}
{
	//自定义iterator函数
	let obj = {
		start:[1,3,2],
		end:[4,6,8],
		[Symbol.iterator](){
			let self = this;
			let index = 0;
			let arr = self.start.concat(self.end);
			let len = arr.length;
			return {
				next(){
					if(index<len){
						return {
							value:arr[index++],
							done:false
						}
					}else{
						return {
							value:arr[index++],
							done:true
						}
					}
				}
			}
		}
	}
	for(let key of obj){
		console.log(key);
	}

}
{
	let arr =['hello','world'];
	for(let value of arr){
		console.log(value);
	}
}







