const Map = [
    ['#','#','#','#','#','#','#','#','#','#','#','#','#'],
    ['#','G','G','.','G','G','G','#','G','G','G','.','#'],
    ['#','#','#','.','#','G','#','G','#','G','#','G','#'],
    ['#','.','.','.','.','.','.','.','#','.','.','G','#'],
    ['#','G','#','.','#','#','#','.','#','G','#','G','#'],
    ['#','G','G','.','G','G','G','.','#','.','G','G','#'],
    ['#','G','#','.','#','G','#','#','#','.','#','#','#'],
    ['#','#','G','.','.','.','G','.','.','.','.','.','#'],
    ['#','G','#','.','#','G','#','#','#','.','#','G','#'],
    ['#','.','.','.','G','#','G','G','G','.','G','G','#'],
    ['#','G','#','.','#','G','#','G','#','.','#','G','#'],
    ['#','G','G','.','G','G','G','#','G','.','G','G','#'],
    ['#','#','#','#','#','#','#','#','#','#','#','#','#']
]

let wayArr = []
let book = []

function searchWay (x, y, step) {
    searchDir(x, y, step)
}

let dirArr  = [searchRgiht, searchDown, searchLeft, searchUp]

function searchDir (x, y, step) {
    let tempArr = []
    dirArr.forEach(item => {
        let result = item(x, y)
        if (result) {
            tempArr.push({
                x: result.x,
                y: result.y,
                step
            })
        }
    })
    wayArr = wayArr.concat(tempArr)
    console.log(wayArr, book)
    step++
    tempArr.forEach(item => {
        searchWay(item.x, item.y, step)
    })
}

function searchRgiht (x, y) {
    // right
    y = y + 1
    return isWay(x, y)
}

function searchDown (x, y) {
    // down
    x = x + 1
    return isWay(x, y)
}

function searchLeft (x, y) {
    // left
    y = y - 1
    return isWay(x, y)
}

function searchUp (x, y) {
    // up
    x = x - 1
    return isWay(x, y)
}

function isWay (x, y) {
    if (!book[x]) {
        book[x] = []
    }
    if (Map[x][y] === '.' && !book[x][y]) {
        book[x][y] = 1
        return {x, y}
    } else {
        return false
    }
}

searchWay(3, 3, 1)