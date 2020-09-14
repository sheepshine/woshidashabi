var intersection = function(nums1, nums2) {
	// let result = [] 
	// nums2.forEach(item => {
	// 	if (nums1.indexOf(item) > -1) {
	// 		if (result.indexOf(item) < 0) {
	// 			result.push(item)
	// 		}
	// 	}
	// })
	// console.log(result)
	// return result
	let result = []
	nums1 = nums1.sort((a, b) => a - b )
	nums2 = nums2.sort((a, b) => a - b )
	let index1 = 0
	let index2 = 0
	while(index1 < nums1.length && index2 < nums2.length) {
		if (nums1[index1] === nums2[index2]) {
			if (result.indexOf(nums1[index1]) === -1) {
				result.push(nums1[index1])
			}
			index1++
			index2++
		} else if (nums1[index1] > nums2[index2]) {
			index2++
		} else {
			index1++
		}
	}
	console.log(result)
	return result
};

intersection([1,2,2,1], [2,2])