var maxArea = function(height) {
	let start = 0
	let end = 0
	let sMap = new Map()
	let max = 0
	let maxHeightPos = 0
	let secHeightPos = 0
	if (height.length === 2) {
		return Math.min(height[0], height[1]) * 1
	}
	while (start < height.length - 1) {
		end = start + 1
		let maxHeight = height[start]
		let secHeight = 0
		while(end < height.length) {
			// maxHeight = Math.max(maxHeight, height[end])
			if (height[end] > maxHeight) {
				maxHeight = height[end]
				maxHeightPos = end
			}
			if (height[end] !== maxHeight) {
				if (height[end] > secHeight) {
					secHeight = height[end]
					secHeightPos = end
				}
			}
			// const area = secHeight * Math.abs((maxHeightPos - end))
			// console.log(area)
			let area = 0
			console.log(maxHeightPos, start, end, area, maxHeight, secHeight)
			if (end > maxHeightPos && secHeightPos < maxHeightPos) {
				const area = secHeight * Math.abs((secHeightPos - end))
			} else {
				secHeight * Math.abs((maxHeightPos - end))
			}
			max = Math.max(max, area)
			end++
		}
		start++
	}
	console.log(max)
	return max
};

// maxArea([1,8,6,2,5,4,8,3,7])
maxArea([1, 2, 1])