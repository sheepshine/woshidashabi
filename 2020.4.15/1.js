const arr = [2,3,6,7,8,9,10]

function LinkArr () {
    this.startValue = undefined
    this.souceArr = []
    this.arr = []
    this.init = function (arr) {
        let linkArr = []
        this.souceArr = arr
        arr.forEach((item, index) => {
            if (index === 0) {
                this.startValue = item
            }
            if (index == arr.length -1) {
                linkArr[index] = 0
            } else {
                linkArr[index] = index+1
            }
        })
        this.arr = linkArr
    }

    this.renderArr = function () {
        let arr = [this.startValue]
        let prev = 0
        for (let i = 0; i < this.arr.length; i++) {
            arr.push(this.souceArr[this.arr[prev]])
            console.log('prev', this.arr[prev], this.arr[i])
            prev = this.arr[prev]
           if (!this.arr[prev]) {
               break
           }
        }
        console.log(arr)
    }

    this.insert = function (key, value) {
        this.arr.push(this.arr[key - 1])
        this.arr[key - 1] = this.souceArr.push(value) - 1
    }
}

const test = new LinkArr()
test.init(arr)

// test.renderArr()

test.insert(2, 9)
test.insert(25, 9)
test.renderArr()