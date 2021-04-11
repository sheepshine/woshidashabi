function transMoney (num) {
	let pecNum = ""
	let initNum = ""
	num += ""
	if (num.indexOf(".")) {
		let arr = num.split(".")
		pecNum = "." + arr[1]
		initNum = arr[0]
	}
	let res = ""
	for (let i=0; i < initNum.length ; i++) {
		if (i!= 0 && i%3 == 0) {
			res+= ","
		}
		res += initNum[initNum.length - 1- i]
		
	}
	console.log("$" + res.split("").reverse().join("") + pecNum)
}

transMoney(1111234561244.1111111)
