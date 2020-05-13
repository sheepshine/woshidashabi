const Test = function () {
    this.name = 111
    this.setName = function (name) {
        this.name = name
    }
    this.sayName = function (name) {
        console.log(this.name)
    }
}

const test = new Test()
console.log(test.name)
test.sayName()
test.setName(666)
test.sayName()
