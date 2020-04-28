let bar = (x) => {
    console.log("arrow function")
}

console.log(typeof bar) // function

console.log(bar) // [Function: bar]

console.log(bar.length) // 箭头函数 有length属性

console.log(bar.name) // 箭头函数 有name属性


/** 
 * 箭头函数 与 普通函数
 * 
 * this 
 * 
 * call apply bind
 * 
 * arguments
 * 
 * prototype
 * 
 * constructor
 *
 * 
 * 不能用作Generator函数 不能使用yeild关键字
*/