const source = 631758924

function render (source) {
    let _source = source + ''
    let arr = []
    let i = 0
    while (_source.length > 0) {
        // 0, 2,4,6,8
        // 1,3,5,7, 9
        if (i % 2 == 0) {
            arr.push(_source[0])
            _source = _source.substring(1)
        } else {
            _source = _source.substring(1) + _source.substring(0, 1)
        }
        i++
    }

    console.log(arr.join(''))
    return arr.join('')
}

render(source)