// call
Function.prototype.myCall = function (content) {
	content.fn = this
	let arg = [...arguments].splice(1)
	let result = content.fn(arg)
	delete content.fn
	return result
}

let obj = {
	test: 11111
}

function test () {
	console.log(this.test)
}

test.myCall(obj)