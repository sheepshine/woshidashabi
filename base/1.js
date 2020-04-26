let Test = function (name) {
    this.name = name
    this.instance = null
}

Test.prototype.getName = function () {
    console.log(this.name)
}

Test.createFn = function (name) {
    if (!this.instance) {
        this.instance = new Test(name)
    }
    this.instance.name = name
    return this.instance
}

// let a = Test.createFn(1)
// a.getName()
// let b = Test.createFn(2)
// b.getName()

// console.log( a === b)

let Test2 = (function () {
    let instance = null
    let Test2 = function (name) {
        if (instance) {
            return instance
        }
        console.log(name)
        this.name = name
        return instance = this
    }

    Test2.prototype.setName = function (name) {
        this.name = name
    }

    Test2.prototype.sayName = function () {
        console.log(this.name)
    }

    return Test2
})()

let a = new Test2('111')
a.sayName()
let b = new Test2('222')
b.sayName()
a.sayName()