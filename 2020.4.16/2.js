// 0  6
// 1  2
// 2  5
// 3  5
// 4  4
// 5  5
// 6  6
// 7  3
// 8  7
// 9  6
// m <= 24    20
const source = {
    0: 6,
    1: 2,
    2: 5,
    3: 5,
    4: 4,
    5: 5,
    6: 6,
    7: 3,
    8: 7,
    9: 6
}

let a = 0
let b = 0
let c = 0
let arr = []
const time1 = Date.now()
while (a <= 1111) {
    while (b <= 1111) {
        c = a + b
        _a = a + ''
        _b = b + ''
        _c = c + ''
        let total = 0
        _a.split('').forEach(item => {
            total += source[item]
        })
        _b.split('').forEach(item => {
            total += source[item]
        })
        _c.split('').forEach(item => {
            total += source[item]
        })
        if (total === 14) {
            arr.push(`${a} + ${b} = ${c}`)
        }
        
        b++
    }
    a++
    b = 0
    c = 0
}

console.log(Date.now() - time1 + 'ms')

console.log(arr.length, arr)