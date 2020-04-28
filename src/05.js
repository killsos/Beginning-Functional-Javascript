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