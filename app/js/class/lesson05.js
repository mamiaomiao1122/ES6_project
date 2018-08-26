{
  console.log('B',0B111110111);  //二进制   0B 0b都可以 不区分
  console.log(0o767);  //八进制
}

//API : isFinite  isNaN
{
  console.log('15',Number.isFinite(15)); //是否有界？有效？  true
  console.log('NaN',Number.isFinite(NaN));//false
  console.log('1/0',Number.isFinite('true'/0));//false
  console.log('NaN',Number.isNaN(NaN));//true
  console.log('0',Number.isNaN(0));//false

}
//API: isInteger
{
  console.log('25',Number.isInteger(25)); //true
  console.log('25.0',Number.isInteger(25.0));//true
  console.log('25.1',Number.isInteger(25.1));//false
  console.log('25.1',Number.isInteger('25'));//false
}

//[-2*53,2*53] 判断是否是安全的范围
{
  console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);//
  console.log('10',Number.isSafeInteger(10)); //true
  console.log('a',Number.isSafeInteger('a')); //false
}


//判断小数部分 并返回整数的部分
{
  console.log(4.1,Math.trunc(4.1)); // 4
  console.log(4.9,Math.trunc(4.9));// 4
}

//判断正负数
{
  console.log('-5',Math.sign(-5)); // -1
  console.log('0',Math.sign(0));// 0
  console.log('5',Math.sign(5));// 1
  console.log('50',Math.sign('50')); // 1
  console.log('foo',Math.sign('foo'));// NaN
}

//立方根
{
  console.log('-1',Math.cbrt(-1)); //-1
  console.log('8',Math.cbrt(8));//2
}
