function deepCopy (origin) {
    if (Object.prototype.toString.call(origin) === '[object Object]') {
        let clone = cloneObject(origin)
        return clone
    }
}

function cloneArray (array) {
    let clone = []
    for (let i =0; i< array.length; i++) {
        if (Object.prototype.toString.call(array[i]) === '[object Object]') {
            clone[i] = cloneObject(array[i])
        }
        if (Object.prototype.toString.call(array[i]) === '[object Array]') {
            clone[i] = cloneArray(array[i])
        } else {
            clone[i] = array[i]
        }
    }
    return clone
}

function cloneObject (origin) {
    let clone = {}
    for (key in origin) {
        console.log(key, Object.prototype.toString.call(origin[key]))
        if (Object.prototype.toString.call(origin[key]) === '[object Object]') {
            clone[key] = cloneObject(origin[key])
        } else if (Object.prototype.toString.call(origin[key]) === '[object Array]') {
            clone[key] = cloneArray(origin[key])
        } else {
            clone[key] = origin[key]
        }
    }
    console.log(clone)
    return clone
}

// console.log(deepCopy({a: {b: 1, c: {d: 6}}}))
// console.log(deepCopy({a: {b: undefined, c: {d: null}}}))
console.log(deepCopy({a: {b: [{c: 1}, 2, 6, 7, 8, 9]}}))