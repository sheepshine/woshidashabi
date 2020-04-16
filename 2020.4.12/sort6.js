let arr = [60,45,56,67,78,79,89,90,11,23,6]
          // 0  1  2  3  4  5  6  7  8  9  10
function sort (start, end) {
    let key = arr[start]
    let storeKey = -1
    while(start <= end) {
        console.log(start, end, key)
        storeKey = start
        while(arr[end] >= key) {
            end--
        }
        while (arr[start] <= key) {
            start++
        }
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
    }
    console.log(storeKey, 111111, end, start)
    if (arr[storeKey] < key) {
        arr[0] = arr[storeKey]
        arr[storeKey] = key
    } else {
        arr = arr.slice(1,storeKey).concat([key]).concat(arr.slice(storeKey))
    }
    
    
    // console.log(arr)
    return start
}

function sortLoop () {
    let　leftKey = arr.length - 1
    while(leftKey>1) {
        leftKey = sort(0, leftKey)
        sort(leftKey)

    }
}

// sortLoop()

let key = sort(0, arr.length - 1)
sort(0, key - 1)
// sort(key+1, arr.length - 1)