var climbStairs = function(n) {
	let dp = []
	dp[0] = 1
	dp[1] = 1
	for(let i = 2; i<= n; i++) {
		dp[i] = dp[i - 2] + dp[i - 1]
	}
	console.log(dp[n])
	return dp[n]
};

climbStairs(2)