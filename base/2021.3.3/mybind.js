Function.prototype.myBind = function (thisContext) {
	let self = this;
	const arg = Array.prototype.splice.call(arguments, 1)
	let fn = function () {
		self.apply(thisContext, arg)
	}
	fn.prototype = Object.create(self.prototype)
	fn.constructor = self
	return fn
}

function test(argus) {
	console.log(this, argus)
}

test.prototype.say = function () {
	console.log("hi")
}

let fn = test.myBind(1, [1, 2, 3])
let fn2 = new fn()
fn2.say()