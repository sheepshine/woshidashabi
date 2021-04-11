const coins = [1, 2, 5]
const result = []

function coinFn (amout) {
	let arr = new Array(amout + 1).fill(Infinity)
	arr[0] = 0
	for (let i =1; i <=amout; i++) {
		for (let j = 0; j < coins.length; j++) {
			if ((i - coins[j]) >= 0) {
				arr[i] = Math.min(arr[i], arr[i-coins[j]]+ 1) 
			}
		}
	}
	console.log(arr)
	return arr[amout]
}

coinFn(11)