const obj1 = {
	a: 100,
	b: {
		x: 200
	}
}

const obj2 = {
	a: 100,
	b: {
		x: 200,
		a: 100
	}
}

function isEquel (obj1, obj2) {
	if ( typeof obj1 !== "object" && typeof obj2 !== "object" && typeof obj1 !== null && typeof obj2 !== null) {
		return obj1 === obj2
	}

	const arrKey1 = Object.keys(obj1)
	const arrKey2 = Object.keys(obj2)
	if (arrKey1.length !== arrKey2.length) {
		return false
	}

	for (key in obj1) {
		const res = isEquel(obj1[key], obj2[key]) 
		if (!res) {
			return false
		}
		
	}
	return true
}

console.log(isEquel(obj1, obj2))

let i = 0
for (i=1; i<=3; i++) {
	setTimeout(() => {
		console.log(i)
	}, 0)
}