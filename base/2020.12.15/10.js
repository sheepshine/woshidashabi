function transForm (num) {
	num = num + ""
	let str = ""
	for (let i = 0; i < num.length; i++) {
		
		if (i%3 === 0 && (i!== 0)) {
			console.log(i, num.length - 1)
			str += ","
		}
		str += num[num.length - i - 1]
	}
	console.log(str.split("").reverse().join(""))
}

transForm(100)