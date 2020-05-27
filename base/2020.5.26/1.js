const arr = [1,2,3,4,5,6]

arr.splice(1,1,6)

console.log(arr)

Array.prototype.spliceMy = function (startIndex, endIndex, ...item) {
    if (startIndex < 0) {
        startIndex = this.length + startIndex
        endIndex = this.length + startIndex + endIndex
    } else {
        endIndex = startIndex + endIndex
    }
    let arrStart = this.slice(0, startIndex)
    let arrEnd = this.slice(endIndex, this.length)
    console.log(arrStart, arrEnd)
    let returnArr = this.slice(startIndex, endIndex)
    let newArr = arrStart.concat(item).concat(arrEnd)
    for (let i = 0; i < newArr.length; i++) {
        this[i] = newArr[i];
    }
    this.length = newArr.length
    return returnArr
}


console.log(arr.spliceMy(-2, 2, 9, 9))
console.log(arr)