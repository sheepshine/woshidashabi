var reverse = function(x) {
	// x = x + "";
	

	// let isF = x[0] === "-" ? "-" : "";
	// let newStr = ""
 //    for (let i = x.length -1; i >= 0; i--) {
 //      newStr =newStr + x[i]
 //    }
 //    if (isF) {
 //    	newStr = "-" + newStr.substring(0, newStr.length - 1)
 //    }
 //    if (newStr[0] === "0") {
	// 	newStr = newStr.substring(1, newStr.length)
 //    }
 //    if (newStr >= Math.pow(2, 31) || newStr <= Math.pow(-2, 31)) {
	// 	return 0
	// }
 //    console.log(newStr)
 //    return newStr;
 	let result = 0;
 	while (x !== 0) {
 		result = result * 10 + x % 10
 		x = (x / 10) | 0
 	}
 	// return result
 	if (result >= Math.pow(2, 31) || result <= Math.pow(-2, 31)) {
		return 0
	}
 	return result
};


reverse(1534236469)