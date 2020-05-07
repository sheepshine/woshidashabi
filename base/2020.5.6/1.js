const objectPoolFactory = function (createFn) {
    let objectPool = []
    return {
        create: function () {
            return objectPool.length === 0 ? createFn.apply(this, arguments) : objectPool.shift()
        },
        recover: function (obj) {
            objectPool.push(obj)
        }
    }
}

const iframeFactory = objectPoolFactory( function () {
    let iframe = document.createElement('iframe')
    document.body.append(iframe)
    console.log(iframe)

    iframe.onload = function () {
        iframe.onload = null
        iframeFactory.recover(iframe)
    }
    return iframe
} )