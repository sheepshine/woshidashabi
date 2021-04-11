function Person (name) {
	this.name = name
}

Person.prototype.walk = function () {
	console.log("walk")
}

function Teacher (name) {
	Person.call(this, name)
}

function inhert (superFn, subFn) {
	let obj = Object.create(superFn.prototype)
	obj.constructor = subFn
	subFn.prototype = obj
}

inhert(Person, Teacher)

let teacher = new Teacher("haha")

console.log(teacher.name)

teacher.walk()