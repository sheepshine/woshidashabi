var rob = function(nums) {
	let dp = []
	dp[0] = 0
	dp[1] = nums[0]
	let n = 2
	while (n <= nums.length) {
		dp[n] = Math.max(nums[n - 1] + dp[n - 2], dp[n - 1])
		n++
	}
	console.log(dp[nums.length], dp)
};

rob([1,2,3,1])