var minCostClimbingStairs = function(cost) {
	cost.push(0);
    let n = cost.length;
    let dp = [];
    dp[0] = cost[0]; 
    dp[1] = cost[1]; 
    for(let i = 2;i < n;i++){
        dp[i] = Math.min(dp[i-2] , dp[i-1]) + cost[i];
    }
    console.log(dp)
    return dp[n-1];
};

minCostClimbingStairs([0,2,2,1])

// minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])