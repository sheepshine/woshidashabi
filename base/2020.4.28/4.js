function _new () {
    let newObj = {}
    let Constructor = Array.prototype.shift.call(arguments)
    newObj.__proto__ = Constructor.prototype

    Constructor.apply(newObj, arguments)
    return newObj
}

function Test (name) {
    this.name = name
}

Test.prototype.sayName = function () {
    console.log(this.name)
}

let test = _new(Test, 'sb')
test.sayName()