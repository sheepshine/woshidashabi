const Flower = function () {}

const xiaoming = {
    sentFlower: function (target) {
        let flower = new Flower()
        target.receiveFlower(flower)
    }
}

const xiaoshen = {
    receiveFlower: function (flower) {
        nvshen.listenGoodMood(() => {
            nvshen.receiveFlower(flower)
        })
    }
}

const nvshen = {
    receiveFlower: function (flower) {
        console.log('收到花', flower)
    },
    listenGoodMood: function (fn) {
        setTimeout(() => {
            fn()
        }, 1000)
    }
}

xiaoming.sentFlower(xiaoshen)