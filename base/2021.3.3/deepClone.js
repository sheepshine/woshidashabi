function deepClone(obj) {
	if (typeof obj !== 'object' || obj === null) {
		return obj
	}
	let result;
	if (obj instanceof Array) {
		result = []
	} else {
		result = {}
	}

	for (key in obj) {
		if (obj.hasOwnProperty(key)) {
			result[key] = deepClone(obj[key])
		}
	}
	return result
}

let obj1 = {
	test: 1,
	arr: [1, 2, 3],
	obj: {
		name: "test"
	}
}

let obj2 = deepClone(obj1)
obj1.test = 2
obj1.arr = []
console.log(obj2)