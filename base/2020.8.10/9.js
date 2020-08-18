var myAtoi = function(str) {
	let result = ""
	let isNumStart = false
	let isSpaceStart = false
	let isPlus = false
	while (str) {
		let s = str.substr(0, 1)
		if (s!== " ") {
			if (!isSpaceStart && isNaN(s) && s !== '-' && s !== '+') {
				str = ""
			}

			isSpaceStart = true
			if (!isNaN(s) ) {
				result += s
				isNumStart = true
			} else if (!isNumStart && !isPlus) {
				if (s === '-' ||  s === '+'){
					result += s
					isPlus = true
				}
			} else {
				str = ""
			}
			
		} else if (isSpaceStart) {
			str = ""
		}
		str = str.substr(1, str.length)
	}
	if (result >= Math.pow(2, 31)) {
		result = Math.pow(2, 31) - 1
	} else if (result < Math.pow(-2, 31)) {
		result = Math.pow(-2, 31)
	}
	if (result === "-" || result === "+") {
		result = 0
	}
	return result || 0
};

console.log(myAtoi("2147483648"))