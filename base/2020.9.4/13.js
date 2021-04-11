var pivotIndex = function(nums) {
	let right = 0
	let left = nums.length - 1
	let rightTotal = nums[right]
	let leftTotal = nums[left]
	while ((left - right) > 2) {
		if (rightTotal > leftTotal) {
			left--
			leftTotal += nums[left]
		} else {
			right++
			rightTotal += nums[right]
		}
	}
	if (rightTotal === leftTotal) {
		return nums[right + 1]
	} else {
		return -1
	}
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 2, 3]))
console.log(pivotIndex([1,7,3,6,5,6]))
