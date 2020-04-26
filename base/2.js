const performanceS = function () {}

performanceS.prototype.calculate = function (salary) {
    return salary * 4
}

const performanceA = function () {}

performanceA.prototype.calculate = function (salary) {
    return salary * 3
}

const performanceB = function () {}

performanceB.prototype.calculate = function (salary) {
    return salary * 2
}

const Bouns = function() {
    this.salary = null
    this.strategy = null
}

Bouns.prototype.setSalary = function (salary) {
    this.salary = salary
}

Bouns.prototype.setStrategy = function (strategy) {
    this.strategy = strategy
}

Bouns.prototype.getBouns = function () {
    return this.strategy.calculate(this.salary)
}

var bouns = new Bouns()
bouns.setSalary(10000)
bouns.setStrategy(new performanceS())

console.log(bouns.getBouns())

bouns.setSalary(20000)
bouns.setStrategy(new performanceA())

console.log(bouns.getBouns())