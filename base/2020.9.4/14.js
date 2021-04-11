 let test = {
	a: 1,
	temp: 1
}
Object.defineProperty(test, 'a', {
	get: function () {
		// console.log(this)
		return this.temp++
	}
})

console.log(test.a)
console.log(test.a)
console.log(test.a)