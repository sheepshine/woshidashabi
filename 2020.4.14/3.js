const a = [2,4,1,2,5,6]
const b = [3,1,3,5,6,4]

function game(a, b) {
    let table = []
    while (a.length > 0 && b.length > 0) {
        let result = checkTable(table, a[0])
        if (result.isIn) {
            let award = table.slice(result.index, table.length)
            table = table.slice(0, result.index)
            a = a.concat(award)
        } else {
            table.push(a[0])
            a.shift()
        }
        
     
        let _result = checkTable(table, b[0])
        if (_result.isIn) {
            let award = table.slice(_result.index, table.length)
            table = table.slice(0, _result.index)
            b = b.concat(award)
        } else {
            table.push(b[0])
            b.shift()
        }
    }

    if (a.length > b.length) {
        console.log('a win', a, b, table)
    } else {
        console.log('b win', a, b, table)
    }
   
}

function checkTable (table, value) {
    let isIn = false
    let index = 0
    for (let i = 0; i < table.length; i++) {
        if (table[i] === value) {
            index = i
            isIn = true
        }
    }
    return {isIn, index}
}

game(a, b)