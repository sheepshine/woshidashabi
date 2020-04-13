const arr = [60,45,56,67,78,79,89,90,11,23]

let arrAll = []

function sort (arr) {
    let isLoop = true
    const {right, left} = renderArr(arr)

    console.log(right, 1111111, left)
    if (right.length > 1) {
        sort(right)
    }
    if (left.length > 1) {
        sort(left)
    }
    // console.log(right)
}

function renderArr (arr) {
    let result = sortcore(arr)
    arrAll.push(result.right, result.left)
    return result
}

function sortcore (arr) {
    let i = 0
    let j = arr.length - 1
    let left = []
    let right = []
    let key = arr[0]
    console.log(key, '------------')
    while (i <= j) {
        console.log(i, j, arr[i], arr[j])
        if (arr[i] < key) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }

        if (i==j) {
            break
        }

        if (arr[j] > key) {
            right.push(arr[j])
        } else {
            left.push(arr[j])
        }
        
        i++
        j--
    }
    return {left, right}
}

sort(arr)