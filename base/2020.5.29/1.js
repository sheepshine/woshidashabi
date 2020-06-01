const e = [
    [0,1,1,2,1],
    [1,0,2,1,2],
    [1,2,0,2,1],
    [2,1,2,0,2],
    [1,2,1,2,0]
]

let sum = 0
let n = e.length
function dfs (cur) {
    const book = []
    console.log(cur)
    sum++
    if (sum === n) {
        console.log(book)
        return
    }
    for (let i = 0; i<=n; i++) {
        console.log(cur, i)
        if (!book[cur]) {
            book[cur] = []
        }
        if (e[cur][i] === 1 && !book[cur][i]) {
            book[cur][i] = 1
            dfs(i)
        }
    }
    return
}

dfs(0)