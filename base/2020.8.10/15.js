var isHappy = function(n) {
	let _sum = sum(n)
	let _fast = sum(_sum)
	// if (n === 1) {
	// 	return true
	// }
	while(_sum !== _fast) {
		_sum = sum(_sum)
		_fast = sum(sum(_fast))
	}
	return  _sum === 1
	
    

    function sum(number) {
    	let sum = 0
    	let n = parseInt(number % 10)
    	while (number) {
    		sum = sum  + n * n
    		number = parseInt(number / 10 )
    		n = number % 10
    	}
    	return sum
    }
};


    console.log(isHappy(1))