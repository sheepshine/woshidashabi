var minIncrementForUnique = function(A) {
	A.sort((a,b) => a - b)
	let n = 1
	let result = 0
	while(n < A.length) {
		if (A[n] <= A[n - 1]) {
			result += A[n - 1] - A[n] + 1
			A[n] = A[n - 1] + 1
		}
		n++
	}
	console.log(result)
	return result
};

minIncrementForUnique([3,2,1,2,1,7])