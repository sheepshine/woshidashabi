function info(target) {
	target.prototype.name = "xiaojiba"
	target.prototype.age = 10
}

@info
class Man {}

let man = new Man()
console.log(man)