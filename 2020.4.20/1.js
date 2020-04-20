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

// let step = 0
let book = []
function search (x, y, step) {
    if (x === 3 && y === 2) {
        console.log('is finish, step is', step)
    } else {
        for (let i = 0; i < routetratics.length; i++) {
            let _x = x
            let _y = y  
            // console.log(i, 'i')
            _x += routetratics[i][0]
            _y += routetratics[i][1]

            
            if (
                // out of range
                (_x < 0 || _x > 4)
                ||
                (_y < 0 || _y > 3)
                || 
                Map[_x] && Map[_x][_y] === 1
                ||
                book[_x] && book[_x][_y] === 1
                ) {
                console.log('no way')
            } else {
                step+=1
                if (!book[_x]) {
                    book[_x] = []
                } 
                book[_x][_y] = 1
                console.log(x, y, '------- step -----', _x, _y, routetratics[i], 1 + routetratics[i][1], Map[_x][_y])
                search(_x, _y, step)
                book[_x][_y] = 0
            }
        }
    }
}

search(0, 0, 0)