const Map = [
    [0,0,1,0],
    [0,0,0,0],
    [0,0,1,0],
    [0,1,0,0],
    [0,0,0,1],
] 

const routetratics = [
    // right
    [1, 0],
    // down
    [0, 1],
    // left
    [-1, 0],
    // up
    [0, -1]
]

const book = [[1]]

let routerArr = []

function search (x, y, step) {
    step = 1 + step
    let arr = []
    if (x === 3 && y === 2) {
        console.log('is finish, step is ', step - 1)
        return 
    }
    for (i = 0; i< routetratics.length; i++) {
        let _x = x
        let _y = y
        _x += routetratics[i][0]
        _y += routetratics[i][1]
        if (
            _x < 0
            ||
            _x >= Map.length
            ||
            _y < 0
            ||
            _y >= Map[0].length
            ||
            Map[_x][_y] === 1
            ||
            book[_x] && book[_x][_y] === 1
        ) {
            console.log('no way')
        } else {
            console.log('to point', _x, _y)
            if (!book[_x]) {
                book[_x] = []
            } 
            book[_x][_y] = 1
            arr.push({
                _x,
                _y,
                step,
            })
        }
    }
    routerArr = routerArr.concat(arr)
    arr.forEach(item => {
        search(item._x, item._y, step)
    })
   
}

search(0, 0, 0)