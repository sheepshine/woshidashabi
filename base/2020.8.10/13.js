var maxArea = function(height) {
	let start = 0
	let end = 0
	let sMap = new Map()
	let max = 0
	while (start < height.length - 1) {
		end = start + 1
		let maxHeight = height[start]
		let secHeight = 0
		while(end < height.length) {
			maxHeight = Math.max(maxHeight, height[end])
			if (height[end] !== maxHeight) {
				secHeight = Math.max(secHeight, height[end])
			}
			const area = secHeight * (end - start)
			// console.log(area)

			console.log(start, end, area, maxHeight, secHeight)
			max = Math.max(max, area)
			end++
		}
		start++
	}
	
	console.log(max)
};

maxArea([1,8,6,2,5,4,8,3,7])