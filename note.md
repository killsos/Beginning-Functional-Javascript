## 1. 函数编程

### 函数式编程概念

```
函数的第一条原则是要小

第二条原则是要更小

函数 有输入和输出 不依赖全局变量


```

### 引用透明性

```
所有函数对于相同的输入都将返回相同的值

这一属性 称之为 引用透明性 referential transparency

引用透明性 来自分析哲学 该哲学分支研究自然语言的语义及其含义

句子中的上下文是"引用透明的" 如果用另一个引用相同实体的词语替换上下文中的一个词语
并不会改变句子的含义

同步问题在于线程不应该在并发运行的时候依赖全局数据 遵循引用透明性的函数只能依赖来自参数的输入

线程可以自由地运行 没有任何锁机制

函数缓存 因为相同输入必有相同的输出


```



### 命令式 声明式 抽象

```
命令式   如何做     数组for循环

声明式   做什么     数组forEach

函数式编程主张以抽象的方式创建函数 这些函数能够在代码的其他部分被被重用

函数式编程好处

纯函数

	是对给定的输入返回相同的输出的函数
	
	不依赖任何外部变量 也不改变任何外部变量
	
  遵循引用透明
  
纯函数产生可测试的代码
  
  	不纯的函数具有副作用
  	
纯函数产生合理的代码

```

### 并发代码

```
javascript 并发执行 webworker  或者 nodejs

如何改造

let global = "something"
let function1 = (input) => {
	// 处理input
	// 改变global
	global = "somethingElse"
}

let function2 = () => {
	if (global === "something")){
		// 业务逻辑
	}
}

优化为纯函数

let global = "something"
let function1 = (input， global) => {
	// 处理input
	// 改变global
	global = "somethingElse"
}

let function2 = (global) => {
	if (global === "something")){
		// 业务逻辑
	}
}
```

### 可缓存

```
1. 检查 缓存

2. 有 返回

3. 没有 计算 缓存 然后结果
```

### 管道与组合

```
|> 

const double = (n) => n * 2;
const increment = (n) => n + 1;

// without pipeline operator
double(increment(double(double(5)))); // 42

// with pipeline operator
5 |> double |> double |> increment |> double; // 42
```

## 2. 函数基础

### 函数分类

```
函数   函数表达式

匿名函数

箭头函数


ES6 import export

```

## 3. 高阶函数

### 高阶函数概念

```
高阶函数

	接受一个函数作为其参数的函数 称为 高阶函数  High-order  function
	
数据类型

	number
	
	string
	
	boolean
	
	object
	
	null 
	
	undefined
	
	symbol
	
	当一门语言允许函数作为任何其他数据类似使用 函数被称为一等公民
	first class citizens
	也就是说
	函数可被赋值给变量  作为参数传递 也可被其他函数返回
	
	
```

### 真实案例

```javascript
const every = (arr, fn) => {
	let result = true;
  for(let i =0; i < arr.lenght; i++) {
    result = result && fn(arr[i])
  }
  
  return result
}

const some = (arr, fn) => {
	let result = false;
  for(let i =0; i < arr.lenght; i++) {
    result = result || fn(arr[i])
  }
  
  return result
}

const sortBy = (property) => {
  return (a,b) => {
    var result = (a[property] < b[property]) ? -1: (a[property] > b[property]) ? 1 : 0;
    return result
  }
}
```

### 闭包与高阶函数

### 闭包概念

```
闭包 是一个内部函数 是在另一个函数内部的函数  

闭包原因 是 词法作用域

```

### Tap函数

```
const tap = (value) => (fn) => typeof(fn) === 'fcuntion' && fn(value)
```

### memoized

```
const memoized = () => {
	const lookupTable = {}
	return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg))
}
```

## 数组函数式编程

### 数组函数方法

##### map

```
与forEach区别 返回值 返回一个新数组

投影函数

```

##### filter

```
与forEach区别 返回值 返回一个新数组

投影函数

```

##### reduce

const reduce = (arr,fn,initialValue) => {
	let accumulator
	 if (initialValue !== undefeind)
	 	accumulator = initialValue
	 else 
	 	accumulator = arr[0]
	 	
	 if (initialValue === undefeind)
	 	for(let i = 0,; i , arr.length; i++)
	 	accumulator = fn(accumulator, arr[i])
	 else
	 	for(const value of arr)
	 		accumulator = fn(accumulator, value)
	 
	 return accumulator
}

##### 连接操作

```
连续多个操作

```

## 柯里化与偏应用

### 柯里化

```
柯里化 currying

一元函数 unary  只接受一个参数

二元函数 binary 接受两个参数

变参函数 接受可变数量的参数

柯里化 把一个多参数函数转换为一个嵌套的一元函数的过程

const add = (x, y) => x + y

const addCurry = x = y => x + y

var add = function (m) {
 
    let temp = function (n) {
        return add(m + n);
    }
 
    temp.toString = function () { // 对象的toString是修改对象转换字符串的方法
        return m;
    }
 
    return temp;
};
 
 
add(3)(4)(5); // 12
add(3)(6)(9)(25); // 43

let curry = function (fn) {
    if (typeof fn !== 'function') {
        throw Error('参数不是函数')
    }

    return function curriedFn(...args) {
        if (args.length < fn.length) {
            return function() {
                return curriedFn.apply(null, args.concat([].slice.call(arguments)))
            }
        }

        return fn.apply(null, args)
    }
}

```

### 偏应用

```
partial application

允许开发者部分的应用函数参数
```

### 组合和管道

##### 组合 compositiion

```
函数式组合在函数式编程中 称之为  组合

组合理念 unix理念

1. 函数有输入 有输出

2. 一个函数的输出应该是另一个尚未可知函数的输入

compose函数

reduce搞定

compose函数数据流的运行机制  从右往左运行  

管道 刚好相反 从左往右运行


```

##### tap

```
tap underscore.js中链式调用对中间结果执行某些操作

cnost identity = (it) => {
	console.log(it)
	return it
}
```

### 函子

##### 函子概念

```
函子 functor 将用一种纯函数式的方式帮助我们处理错误

MayBe  Either

函子是一个普通对象(在其他语言中 可能是一个类) 它实现了map函数 
在遍历中每个对象之的时候生成一个新对象

函子是容器
函子是一个持有值的容器
函子是一个普通对象

const Container = function (val) {
	this.value = val
}

Contanier.of = function(val) {
	return new Container(val)
}


函子map方法

Container.prototype.map = function (fn) {
	return Container.of(fn(this.value))
}

函子 是一个实现了 map契约的对象

不同类型函子Mybe Either Pointed


const MayBe = function (val) {
	this.value = val
}

MayBe.of = function(val) {
	return new Container(val)
}

MayBe.prototype.isNothing = function () {
	return (this.value === null || this.value === undefined)
}

MayBe.prototype.map = function (fn) {
	return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this.value))
}

```

### Monad

```
Monad就是一个含有chain方法的函子

```

### Generator

```
同步  函数在执行时候会阻塞调用者  并在执行完毕之后返回结果

异步  函数在执行时候不会阻塞调用者  但是一旦执行完毕就会返回结果

function* gen() {
	return value
}

it = next()

it.value it.done

function* gen() {
	yield value
}

惰性求值

	是代码知道调用时才会执行
	
向generator传递数据

	next(value)
```

