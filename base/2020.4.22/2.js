Function.prototype.before = function (fn) {
    const _this = this
    fn()
    return _this
}

Function.prototype.after = function (fn) {
    const _this = this
    return function () {
        _this.apply(this, arguments)
        fn.apply(this, arguments)
    }
}

let test = function (num) {
    console.log(num)
}

test = test.before(function() {
    console.log(1)
}).after(function () {
    console.log(3)
})

// test(2)

let addMoenty = (function () {
    let sum = []
    return function () {
        if (arguments.length === 0) {
            let _sum = 0
            for (let i = 0; i< sum.length; i++) {
                _sum += sum[i]
            }
            console.log(_sum)
            return _sum
        } else {
            [].push.apply(sum, arguments)
        }
    }
})()

addMoenty(1)
addMoenty(10)
addMoenty(20)
addMoenty()