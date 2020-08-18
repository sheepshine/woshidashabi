var isPalindrome = function(x) {
	x = x + ""
	let left = 0
	let right = x.length - 1
	let isTrue = true
	while (left < right && isTrue) {
		if(x[left] !== x[right]) {
			isTrue = false
		} else {
			left++
			right--
		}
	}
	console.log(isTrue)
	return isTrue
};

isPalindrome(1222)