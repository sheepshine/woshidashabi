var partitionLabels = function(S) {
	let index = 0
	while (index < 1) {
		let currS = S[index]
		let lastIndex = index + 1
		let lastPos = index
		while(lastIndex < S.length) {
			if (S[lastIndex] === S[index]) {
				lastPos = lastIndex
			}
			lastIndex++
		}
		index++
		console.log(lastPos)
	}
};

partitionLabels("ababcbacadefegdehijhklij")