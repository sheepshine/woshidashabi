function myPromise (fn) {
	this.callback = []
	let _this = this
	function resolve (val) {
		if (_this.callback.length > 0) {
			_this.callback.forEach(item => {
				let res = item.cb(val)
				if (typeof res === "object" && res.then) {
					res.then(resolve)
				} else {
					item.resolve(val)
				}
				
			})
		}
		
	}
	fn(resolve)
}

myPromise.prototype.then = function (cb) {
	let _this = this
	return new myPromise(resolve => {
		_this.callback.push({
			cb,
			resolve
		})
	})
}

const p1 = new myPromise(resolve => {
	setTimeout(() => {
		resolve(11111)
	}, 1000)
})

const p2 = new myPromise(resolve => {
	setTimeout(() => {
		resolve(22222)
	}, 1000)
})

p1.then(res => {
	console.log(res, 6666666)
	return p2
}).then(res => {
	console.log(res, 666)
})