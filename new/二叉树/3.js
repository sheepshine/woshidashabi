var maxProfit = function(prices) {
	let totalAmout = 0;
    let maxLength = prices.length;
	let max = 0;
	let buyDay = 0;
	let sellDay = 0;

	function sellBuy (sellDay) {
		for (let i = sellDay; i < prices.length; i++) {
	    	let start = i + 1;
		    let curDay  = i;
		    while(start <= maxLength) {
		    	const _max = prices[curDay] - prices[start];
		    	if (_max > 0 && _max > max){
		    		max = _max;
		    		buyDay = curDay;
		    		sellDay = start;
		    	}
		    	start++
		    }
		    // totalAmout += max;
	    }
    	totalAmout +=max;
		    console.log(sellDay, "max", maxLength)
    	if (sellDay < maxLength) {
    		sellBuy(sellDay);
    	}
	}

	sellBuy(0)
    
    console.log(totalAmout, buyDay, sellDay)
};

maxProfit([7,1,5,3,6,4])