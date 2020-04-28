var add = function (m) {
 
    var temp = function (n) {
        return add(m + n);
    }
 
    temp.toString = function () { // 对象的toString是修改对象转换字符串的方法
        return m;
    }
 
    return temp;
};
 
 
add(3)(4)(5); // 12
add(3)(6)(9)(25); // 43

// 思路 有多少次调用 是无法确定 不要从这里突破
// toString 最后返回还是一个函数 但是函数是对象
// 对象当要输出的时候会调用 toString方法