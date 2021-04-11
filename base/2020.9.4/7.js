// bind
Function.prototype.myBind = function (content) {
	content.fn = this
	let arg = [...arguments].splice(1)
	const resFn = () => {
		content.fn(arg)
	}
	return resFn
}


let obj = {
	test: 11111
}

function test () {
	console.log(this.test)
}

let test2 = test.myBind(obj)
test2()