function Person (name) {
	this.name = name
}

Person.prototype.say = function () {
	console.log("hello")
}

function Coder (name, type) {
	Person.call(this, name)
	this.type = type
}

Coder.prototype = Object.create(Person.prototype)
Coder.prototype.constructor = Coder

let haha = new Coder("haha", "fed")

console.log(haha.constructor)