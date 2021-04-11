function deepClone (obj) {
	let cloneObj = Array.isArray(obj) ? [] : {}
	for (key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (typeof obj[key] === "object") {
				cloneObj[key] = deepClone(obj[key])
			} else {
				cloneObj[key] = obj[key]
			}
		}
	}
	return cloneObj
}

const test = {a: [1,2,3,4,6], b: {c: 1, d: {a:1}}}
const test1 = deepClone(test)
console.log(test1)