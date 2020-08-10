function longestPalindrome (s) {
	const strArr = [];
	for (let i = 0; i < s.length; i++) {
		let str = s[i]
		strShow(i, true)
		// for (let j = i + 1; j <s.length; j++) {
		// 	strArr.push(s[i] + s[j])
		// 	for (let k = j + 1; k <s.length; k++){
		// 		strArr.push(s[i] + s[j] + s[k])
		// 	}
		// }
	}
	function strShow (i, isFirst) {
		if (i < s.length) {
			let str = s[i]
			if (strArr[strArr.length - 1] && !isFirst) {
				str = strArr[strArr.length - 1] + str
			}
			strArr.push(str)
			strShow(i + 1)
		}
	}
	console.log(strArr)
	let maxLength = "";
	for (let i = 0; i < strArr.length; i++) {
		let middle = strArr[i].length / 2
		let left = 0;
		let right = 0;
		if (middle % 1 === 0) {
			left = middle - 1
			right = middle
		} else {
			left = parseInt(middle) - 1
			right = parseInt(middle) + 1
		}
		// console.log(left, right, middle, strArr[i])
		judge()
		function judge () {
			if (strArr[i][left] && strArr[i][right] && strArr[i][left] === strArr[i][right]) {
				left--
				right++
				judge()
			} else {
				if (!strArr[i][left] && !strArr[i][right]) {
					maxLength = strArr[i].length > maxLength.length ? strArr[i] : maxLength
					// console.log(strArr[i], "maxLength", maxLength)
				}
			}
		}
	}
	console.log(maxLength)
	
}

longestPalindrome('abcabbaaaaa')