const source = '631758924'

function render (str) {
    let arr = str.split('')
    let start = 0
    let end = str.length
    while(start < end) {
        if (start % 2 === 0) {
            console.log(arr[start])
            start++
        } else {
            arr[end] = arr[start]
            end++
            start++
        }
    }
    // console.log(start, end, arr)
}

render(source)