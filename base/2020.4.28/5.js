Function.prototype.myBind = function () {
    let _thisArg = Array.prototype.shift.call(arguments)
    let args = Array.prototype.slice.call(arguments)
    let _this = this
    return function () {
        return _this.apply(_thisArg, args.concat(Array.prototype.slice.call(arguments)))
    }
}

function test (name) {
    this.name = name
}

// let obj = {}
// let fn = test.myBind(obj)
// fn('haha')
// console.log(obj.name)

// let obj = {}
// let fn = test.myBind(obj, 'sb')
// fn()
// console.log(obj.name)