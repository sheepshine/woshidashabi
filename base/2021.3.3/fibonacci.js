function fibonacci(n) {
    if (n === 0) {
    	return 0
    }
    if (n === 1) {
    	return 1
    }
    let arr = [0, 1]
    for (let i = 2; i <= n; i++) {
    	let res = arr[i-2] + arr[i-1]
    	arr.push(res)
    }
    return arr[n]
    // return fibonacci(n-2) + fibonacci(n-1)
}
fibonacci(5)