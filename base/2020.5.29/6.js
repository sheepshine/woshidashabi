const getData = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000))

function* testG () {
    const data = yield getData()
    console.log("data", data)
    const data2 = yield getData()
    console.log("data2", data2)
    return "success"
}

var gen = testG()

// var dataPromise = gen.next()

// console.log(dataPromise, 6666666)
// dataPromise.value.then(res => {
//     var data2Promise = gen.next(res)

//     console.log(data2Promise)
//     data2Promise.value.then(res2 => {
//         gen.next(res2)
//     })
// })

function asyncToGenerator(generatorFunc) {
    return function () {
        const gen = generatorFunc.apply(this, arguments)
        return new Promise((resolve, reject) => {
            function step(key ,arg) {
                let generatorResult
                try {
                    generatorResult = gen[key]("key")
                } catch(error) {
                    return reject(error)
                }
                const {value, done} = generatorResult
                if (done) {
                    return resolve(value)
                } else {
                    return Promise.resolve(value).then(val => step("next", value), err => step("throw", err))
                }
            }
            step("next")
        })
    }
}

asyncToGenerator(testG)()