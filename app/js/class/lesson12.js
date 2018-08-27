//proxy代理（中间层）
//reflect反射（object）
//俩者方法一样

{
	let obj = {   //供应商，原始对象（存储数据）
		time:'2018-04-01',
		name:'net',
		_r:123
	};

	let monitor = new Proxy(obj,{  //创建代理对象，新对象
		
		//拦截对象属性的读取
		get(target,key){
			return target[key].replace('2018','2019')
		},

		//拦截对象设置属性
		set(target,key,value){
			if(key  === 'name'){  //只允许修改name
				return target[key] = value;
			}else{
				return target[key];
			}
		},
		
		//拦截key in object操作
		has(target,key){
			if(key === 'name'){  //只暴露name属性
				return target[key];
			}else{
				return false;
			}
		},

		//拦截delete
		deleteProperty(target,key){
			if(key.indexOf('_')>-1){ //属性下划线开头的可以删除，其他不允许删除，返回当前值
				delete target[key];
				return true
			}else{
				return target[key];
			}
		},
		//拦截Object.keys,Object.getOwnPropertySymbols,object.getOwnPropertyNames
		ownKeys(target){
			return Object.keys(target).filter(item=>item!='time')//过滤掉time 相当于保护time的做法
		}
	});
	console.log('get',monitor.time);//2019-04-01
	monitor.time='2018';   //用户可以直接访问的monitor对象
	console.log('set',monitor.time);//2019-04-01  不能修改

	monitor.name='mamiao';
	console.log('set',monitor.name);//mamiao

	console.log('has','name' in monitor,'time' in monitor)  //true false
	console.log('ownKeys',Object.keys(monitor));

	delete monitor.time;
	console.log('delete',monitor);//未删除

	delete monitor._r;
	console.log('delete',monitor);//删除了_r

	console.log('ownKeys',Object.keys(monitor))//只会显示name  _r
	
}

{    //Reflect,和上面的一样
	let obj = {   
		time:'2018-04-01',
		name:'net',
		_r:123
	};
	console.log(Reflect.get(obj,'time'));
	Reflect.set(obj,'name','zxcv');
	console.log(obj);
	console.log(Reflect.has(obj,'name'));//true
}

{
	//校验模块
	function validator(target,validator){  //this ，校验的条件
		return new Proxy(target,{
			_validator:validator,
			set(target,key,value,proxy){
				if(target.hasOwnProperty(key)){   //判断有没有key值
					let va = this._validator[key];
					if(!!va(value)){   //如果存在且满足条件
						return Reflect.set(target,key,value,proxy)
					}
					else{
						throw Error('不能设置');  //不满足条件的话，抛出异常
					}
				}else{
					throw Error('${key} 不存在');
				}
			}
		})
	}
	const personValid={   //校验的条件，过滤选项
		name(val){
			return typeof val==='string'
		},
		age(val){
			return typeof val ==='number' && val>18
		}
	}
	class Person{  //对象
		constructor(name,age){
			this.name =name;
			this.age=age;
			return validator(this,personValid)  //返回proxy对象,代替了Person
		}
	}
	const person = new Person('mamiao',18);
	console.log(person); //Proxy {name: "mamiao", age: 18}
	// person.name=12;//报错:不能设置;;是字符串
	person.name="zhoujielun";
	person.age=22;//不可修改
}




















