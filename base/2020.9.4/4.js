/**
 promise
**/
class myPromise {
	constructor(callback) {
		this.msg = ""
		this.success = null
		this.fail = null
		this.queue = []
		callback(
			success => {
				this.msg = "SUCCESS"
				this.success = success
				this.queue.forEach(item => {
					item.res(success)
				})
			},
			fail => {
				this.msg = "FAIL"
				this.fail = fail
				this.queue.forEach(item => {
					item.rej(success)
				})
			}
		)
	}

	then(fullFn, fail) {
		return new myPromise((resFn, rejFn) => {
			if (this.msg === "SUCCESS") {
				handle(this.success)
			}
			if (this.msg === "FAIL") {
				fail(this.fail)
			} else {
				this.queue.push({
					res: resFn,
					rej: rejFn
				})
			}
		})
		

		function handle(value) {
			let reaValue = (fullFn instanceof Function && success(value)) || value
			if (reaValue && reaValue.then instanceof Function) {
	          reaValue.then(
	            res => {
	              resFn(res) //把值存到新的this.success中，等下一次then调用
	            },
	            fail => {
	              rejFn(fail) //把错误存到新的this.fail中(只要上次不是promise对象就不能then了)
	            }
	          )
	        } else {
	          //其他的值就直接存进下一次then方法成功回调函数的参数中
	          resFn(reaValue)
	        }
		}
	}
}

let p = new myPromise((resolve, reject) => {
	setTimeout(() => {
		resolve("step 1")
	}, 1000)
})

let p2 = new myPromise((resolve, reject) => {
	setTimeout(() => {
		resolve("step 2")
	}, 2000)
})

p.then(res => {
	console.log(res, 1111111)
	return p2
}).then(res => {
	console.log(res, 222222222)
})