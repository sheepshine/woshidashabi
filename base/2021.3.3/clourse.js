const zhangsan = {
	name: "张三",
	sayHi () {
		console.log(this.name)
	},
	wait () {
		setTimeout(function () {
			console.log(this)
		})
	}
}

name = "outwindows"

function test () {
	this.name = "windows"
	console.log(this.name)
}
console.log(this)
// zhangsan.sayHi()
// zhangsan.wait()
test()
console.log(this.name)