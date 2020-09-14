var maxSubArray = function(nums) {
	let nax = nums[0]
	let pre = 0
	for (let num of nums) {
		if (pre > 0) {
			pre += num
		} else {
			pre = num
		}
		ans = Math.max(max, pre)
	}
	console.log(ans)
	// sum[i] = Math.max(sum[i], sum[i] + nums[i - 1])
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])