//数组扩展

//Array.of()
{
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=',arr);

  let empty=Array.of();
  console.log('empty',empty); //空数组
}

//Array.from()
{
  let p=document.querySelectorAll('p');
  let pArr=Array.from(p);  //否则不是真正的数组
  pArr.forEach(function(item){  //forEach必须是数组才能用
    console.log(item.textContent);
  });

  console.log(Array.from([1,3,5],function(item){return item*2})); // 2 6 10
}

//fill()
{
  console.log('fill-7',[1,'a',undefined].fill(7)); //7 7 7
  console.log('fill,pos',['a','b','c'].fill(7,1,3));// a 7 7
}

//遍历：keys()
{
  for(let index of ['1','c','ks'].keys()){
    console.log('keys',index); // 0 1 2
  }
  for(let value of ['1','c','ks'].values()){
    console.log('values',value); // 1 c ks   注意兼容问题
  }
  for(let [index,value] of ['1','c','ks'].entries()){
    console.log('values',index,value);
  }
}

{
  console.log([1,2,3,4,5].copyWithin(0,3,4)); // 4 2 3 4 5
}

{
  console.log([1,2,3,4,5,6].find(function(item){return item>3}));  //只找一个目标元素
  console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));
}

{
  console.log('number',[1,2,NaN].includes(1)); //true
  console.log('number',[1,2,NaN].includes(NaN));//true
}
