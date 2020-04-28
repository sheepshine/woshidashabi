const salesOffices = {}

salesOffices.clientList = {}

salesOffices.listen = function (key, fn) {
    if (!this.clientList[key]) {
        this.clientList[key] = []
    }
    this.clientList[key].push(fn)
}

salesOffices.trigger = function () {
    const key = Array.prototype.shift.call(arguments)
    this.clientList[key].forEach(element => {
        element.apply(this, arguments)
    })
}

salesOffices.listen('88', function(price) {
    console.log('reciver1', price)
})

salesOffices.listen('100', function(price) {
    console.log('reciver2', price)
})

salesOffices.listen('88', function(price) {
    console.log('reciver3', price)
})

salesOffices.listen('100', function(price) {
    console.log('reciver4', price)
})

salesOffices.trigger('88', 10000)
salesOffices.trigger('100', 11000)