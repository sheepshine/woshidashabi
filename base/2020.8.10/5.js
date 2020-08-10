class myPromise {
	constructor (executor) {
		this.state = 'pending';

		this.value = undefined;

		this.reason = undefined;

		this.onResolvedCallbacks = [];

		this.onRejectedCallbacks = [];

		let resolve = (value) => {
			if (this.state === 'pending') {
				this.state = 'fulfilled';
				this.value = value;

				this.onResolvedCallbacks.forEach(fn => fn());
			}
		};

		let reject = (reason) => {
			if (this.state === 'pending') {
				this.state = 'rejected';
				this.reason = reason;

				this.onRejectedCallbacks.forEach(fn => fn())
			}
		}; 

		try {
			executor(resolve, reject);
		} catch(err) {
			reject(err)
		}
	}

	then(onFulfilled, onRejected) {
		let promise2 = new myPromise((resolve, reject) => {
			console.log(resolve, reject, 111111)
			if (this.state === 'fulfilled') {
				let x = onFulfilled(this.value);
				resolvePromise(promise2, x ,resolve, reject)
			}
			if (this.state === 'rejected') {
				let x = onRejected(this.reason);
				resolvePromise(promise2, x, resolve, reject);
			}

			if(this.state === 'pending') {
				this.onResolvedCallbacks.push(() => {
					let x = onFulfilled(this.value);
					resolvePromise(promise2, x, resolve, reject);
				})

				this.onRejectedCallbacks.push(() => {
					let x = onRejected(this.reason);
					resolvePromise(promise2, x, resolve, reject);
				})
			}
		})
		
		return promise2;
	}
}

function resolvePromise(promise2, x, resolve, reject){
  // 循环引用报错
  if(x === promise2){
    // reject报错
    return reject(new TypeError('Chaining cycle detected for promise'));
  }
  // 防止多次调用
  let called;
  // x不是null 且x是对象或者函数
  if (x != null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      // A+规定，声明then = x的then方法
      let then = x.then;
      // 如果then是函数，就默认是promise了
      if (typeof then === 'function') { 
        // 就让then执行 第一个参数是this   后面是成功的回调 和 失败的回调
        then.call(x, y => {
          // 成功和失败只能调用一个
          if (called) return;
          called = true;
          // resolve的结果依旧是promise 那就继续解析
          resolvePromise(promise2, y, resolve, reject);
        }, err => {
          // 成功和失败只能调用一个
          if (called) return;
          called = true;
          reject(err);// 失败了就失败了
        })
      } else {
        resolve(x); // 直接成功即可
      }
    } catch (e) {
      // 也属于失败
      if (called) return;
      called = true;
      // 取then出错了那就不要在继续执行了
      reject(e); 
    }
  } else {
    resolve(x);
  }
}

function test () {
	return new myPromise((resolve, reject) => {
		setTimeout(() => {
			resolve(1111)
		}, 2000)
	})
}

test().then(res => {
	console.log(res, 11111)
	return test()
}, err => {
	console.log(err)
}).then(res => {
	console.log(res, 66666)
}).then(res => {
	console.log(res, 123)
})
