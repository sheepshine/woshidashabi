const even = {
    clientList: {},
    listen: function (key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = []
        }
        this.clientList[key].push(fn)
    },
    trigger: function () {
        const key = Array.prototype.shift.call(arguments)
        this.clientList[key].forEach(element => {
            element.apply(this, arguments)
        })
    }
}

const initEvent = function (obj) {
    for (i in even) {
        obj[i] = even[i]
    }
}

const sellerOffice = {}
const sellerOffice2 = {}
initEvent(sellerOffice)
initEvent(sellerOffice2)

sellerOffice.listen('88', function(price) {
    console.log('reciver1', price)
})

sellerOffice2.listen('88', function(price) {
    console.log('reciver1', price)
})

sellerOffice.listen('100', function(price) {
    console.log('reciver2', price)
})

sellerOffice.listen('88', function(price) {
    console.log('reciver3', price)
})

sellerOffice.listen('100', function(price) {
    console.log('reciver4', price)
})

sellerOffice.trigger('88', 10000)
sellerOffice.trigger('100', 11000)
sellerOffice2.trigger('88', 9000)
sellerOffice2.trigger('100', 10000)