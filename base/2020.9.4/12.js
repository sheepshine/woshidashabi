function plus (a, b) {
	console.log(a + b)
}

function plusCarry (a) {
	return function (b) {
		console.log(a + b)
	}
}

// plus(1, 2)
// plusCarry(1)(2)

// console.log(plus.length)

function carry (fn) {
	function _c(rest, argulist) {
		if (rest === 0) {
			return fn.apply(null ,argulist)
		} else {
			return function (x) {
				return _c(rest - 1, argulist.concat(x))
			}
		}
	}

	return _c(fn.length, [])
}

let test1 = carry(plus)
test1(1)(2)
