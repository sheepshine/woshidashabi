/**
 * initialize your data structure here.
 */
var MinStack = function() {
	this.arr= []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
	console.log(this.arr)
	this.arr.push(x)
	console.log(this.arr)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	this.arr.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	return this.arr[0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
	return Math.min(this.arr.join(""))
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 // var obj = new MinStack()
 // obj.push(1)
