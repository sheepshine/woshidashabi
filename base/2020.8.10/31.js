var isValid = function(s) {
	if (s.length %2) return false
	const stck = []
	const keyMap = {
		"}": "{",
		")": "(",
		"]": "["
	}
	for (let i = 0; i < s.length; i++) {
		if (keyMap[s[i]]) {
			if ( stck[stck.length - 1] !== keyMap[s[i]]) {
				stck.push(false)
				break
			} else {
				stck.pop()
			}
		} else {
			stck.push(s[i])
		}
	}
	console.log(stck, 11111)
	return stck.length === 0
};

isValid("(([]){})")