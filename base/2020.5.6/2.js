const order500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
        console.log('+100')
    } else {
        return 'next'
    }
}

const order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
        console.log('+50')
    } else {
        return 'next'
    }
}

const orderNormal = function (orderType, pay, stock) {
    if (stock > 0) {
        console.log('+0')
    } else {
        console.log('no stock')
    }
}

const Chain = function (fn) {
    this.fn = fn
    this.successor = null
}

Chain.prototype.setNext = function (successor) {
    return this.successor = successor
}

Chain.prototype.passRequest = function () {
    let ret = this.fn.apply(this, arguments)
    console.log(ret, 11111, this.successor)
    if (ret === 'next') {
        return this.successor && this.successor.passRequest.apply(this, arguments)
    }

    return ret
}

const chainOrder500 = new Chain(order500)
const chainOrder200 = new Chain(order200)
const chainOrderNormal = new Chain(orderNormal)

chainOrder500.setNext(chainOrder200)
chainOrder200.setNext(chainOrderNormal)

chainOrder500.passRequest(2, true, 500)

Function.prototype.after = function (fn) {
    let self = this
    return function () {
        let result = self.apply(this, arguments)
        if (result === 'next') {
            return fn.apply(this, arguments)
        }
        return result
    }
}

// const order = order500.after( order200 ).after( orderNormal )