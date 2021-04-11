var maximumWealth = function(accounts) {
	let max = 0
	for (let i = 0; i< accounts.length; i++) {
		let cur = 0
		for (let j = 0; j < accounts[i].length; j++) {
			cur+=accounts[i][j]
		}
		if (cur > max) {
			max = cur
		}
	}
	console.log(max)
	return max
};

maximumWealth([[1,2,3],[3,2,1]])