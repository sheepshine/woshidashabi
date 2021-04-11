function findAllOccurrences(arr, target) {
	let res = []
	arr.forEach((item, index) => {
		if (item === target) {
			res.push(index)
		}
	})
	console.log(res)
	return res
}

// findAllOccurrences(['a','b','c','d','e','f','a','b','c'], 'a')

function square(arr) {
	let res = []
	arr.forEach((item, index) => {
		res.push(item * item)
	})
	console.log(res)
	return res
}

square([1, 2, 3, 4])