function deepClone(obj) {
	let result = {}
	for (let i in obj) {
			console.log(obj[i].constructor, obj[i] instanceof Array )
		if (typeof obj[i] === "object" && obj[i] instanceof Array) {
			result[i] = deepClone(obj[i])
		} else {
			result[i] = obj[i]
		}
	}
	console.log(result, 11111111)
	return result
}

deepClone({a: 1, b: 2, c: { a: 1, b: [1, 2, 3]}})