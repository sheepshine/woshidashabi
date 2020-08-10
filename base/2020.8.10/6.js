function MyPromise (fn) {
	let _this = this;

	this.callback = [];
	this.isResolved = false;

	function resolve(val) {
		// if (_this.isResolved) return;
  //   	_this.isResolved = true;

		if (_this.callback.length > 0) {
			_this.callback.forEach(item => {
				res = item.cb(val)
				if (typeof res === "object" && res.then) {
					res.then(item.resolve)
				} else {
					item.resolve(res)
				}
			})
		}
	}

	fn(resolve);
}

MyPromise.prototype.then = function (cb) {
	let _this = this;
	return new MyPromise(resolve1 => {
		_this.callback.push({
			cb: cb,
			resolve: resolve1
		})
	})
}

const p = new MyPromise((resolve) => {
	// console.log(1)
	setTimeout(function () {
		resolve(2)
	}, 1000)
})

const p2 = new MyPromise((resolve) => {
	// console.log(1)
	setTimeout(function () {
		resolve(3)
	}, 2000)
})

p.then(val => {
	console.log(val, 11111)
	return p2
})
.then(val => {
	console.log(val, 2222222)
})