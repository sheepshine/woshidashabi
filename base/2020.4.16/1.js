const Map = [
    [
        '#',
        '#',
        '#',
        '#',
        '#',
        '#',
        '#',
        '#',
        '#',
        '#',
        '#',
        '#',
        '#'
    ],
    [
        '#',
        'G',
        'G',
        '.',
        'G',
        'G',
        'G',
        '#',
        'G',
        'G',
        'G',
        '.',
        '#'
    ],
    [
        '#',
        '#',
        '#',
        '.',
        '#',
        'G',
        '#',
        'G',
        '#',
        'G',
        '#',
        'G',
        '#'
    ],
    [
        '#',
        '.',
        '.',
        '.',
        '.',
        '.',
        '.',
        '.',
        '#',
        '.',
        '.',
        'G',
        '#'
    ],
    [
        '#',
        'G',
        '#',
        '.',
        '#',
        '#',
        '#',
        '.',
        '#',
        'G',
        '#',
        'G',
        '#'
    ],
    [
        '#',
        'G',
        'G',
        '.',
        'G',
        'G',
        'G',
        '.',
        '#',
        '.',
        'G',
        'G',
        '#'
    ],
    [
        '#',
        'G',
        '#',
        '.',
        '#',
        'G',
        '#',
        '#',
        '#',
        '.',
        '#',
        '#',
        '#'
    ],
    [
        '#',
        '#',
        'G',
        '.',
        '.',
        '.',
        'G',
        '.',
        '.',
        '.',
        '.',
        '.',
        '#'
    ],
    [
        '#',
        'G',
        '#',
        '.',
        '#',
        'G',
        '#',
        '#',
        '#',
        '.',
        '#',
        'G',
        '#'
    ],
    [
        '#',
        '.',
        '.',
        '.',
        'G',
        '#',
        'G',
        'G',
        'G',
        '.',
        'G',
        'G',
        '#'
    ],
    [
        '#',
        'G',
        '#',
        '.',
        '#',
        'G',
        '#',
        'G',
        '#',
        '.',
        '#',
        'G',
        '#'
    ],
    [
        '#',
        'G',
        'G',
        '.',
        'G',
        'G',
        'G',
        '#',
        'G',
        '.',
        'G',
        'G',
        '#'
    ],
    [
        '#',
        '#',
        '#',
        '#',
        '#',
        '#',
        '#',
        '#',
        '#',
        '#',
        '#',
        '#',
        '#'
    ]
]


const xLength = Map[0].length
const yLength = Map.length

function haker(map) {
    curPoint = [0, 0]
    curValue = 0
    for (let y = 0; y < yLength; y++) {
        for (let x=0; x < xLength; x++) {
            if (map[y][x] === '.') {
                value = searchPoint(map, x, y)
                console.log(value, x, y)
                if (value > curValue) {
                    curValue = value
                    curPoint = [y, x]
                }
            }
        }
    }
    console.log(curPoint, curValue, 11111111111)
}

function searchPoint (map,x, y) {
    let _x = x
    let _y = y
    // ->
    let rightValue = 0
    while (map[y][x] !== '#' && x < xLength) {
        if (map[y][x] === 'G') {
            rightValue++
        }
        x++
    }
    // left
    x = _x
    y = _y
    let leftValue = 0
    while(map[y][x] !== '#' && x >=0) {
        if (_x=== 11 && _y === 1) {
            console.log(x,y, 66666, map[y][x])
        }
        if (map[y][x] === 'G') {
            leftValue++
        }
        x--
    }
    // down
    x = _x
    y = _y
    let downValue = 0
    while(map[y][x] !== '#' && y < yLength) {
        if (map[y][x] === 'G') {
            downValue++
        }
        y++
    }
    // up

    x = _x
    y = _y
    let upValue = 0
    while (map[y][x] !== '#' && y >= 0) {
        if (map[y][x] === 'G') {
            upValue++
        }
        y--
    }
    if (_x=== 11 && _y === 1) {
        console.log(rightValue, downValue, leftValue, upValue, 666)
    }
    return rightValue + downValue + leftValue + upValue
}

haker(Map)