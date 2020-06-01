function request (url) {
    return new Promise (resolve => {
        const time = Math.random() * 1000
        setTimeout(() => resolve(`${url} + ${Date.now()}`), time)
    })
}

function maxNum (urls, maxNum) {
    this.maxNum = maxNum
    this.urls = urls
    this.requestArr = []
    this.requestQueue = []
    this.result = []
    this.renderQueue = function () {
        this.requestQueue = []
        this.requestArr = []
        this.requestQueue = this.urls.splice(0, this.maxNum)
        this.renderRequest()
    }
    this.renderRequest = function () {
        this.requestQueue.forEach(item => {
            this.requestArr.push(request(item))
        })
    
        Promise.all(this.requestArr).then(res => {
            this.result = this.result.concat(res)
            if (this.urls.length) {
                this.renderQueue()
            } else {
                this.printRes()
            }
        })
    }

    this.renderQueue()
    
    this.printRes = function () {
        console.log(this.result, 'result')
        return this.result
    }
}

let urls = ['www.test.com/1', 'www.test.com/2', 'www.test.com/3']
maxNum(urls, 2)