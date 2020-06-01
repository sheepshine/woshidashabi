const sourceArr = [60,45,56,67,78,79,89,90,11,23]
const resultArr = new Array()

function sort (arr) {
    let i = 0
    let j = arr.length - 1
    let key = arr[0]
    let _left = 0
    let _right = 0

    let hasRight = false
    let hasLeft = false

    function sortCore () {
        // ------ find --------
        while ((!hasRight || !hasLeft) && i <= j) {
            if (i === j) {
                if (arr[i] > key) {
                    arr.splice(i, 0, arr[0])
                    arr.shift()
                } else {
                    arr[0] = arr[i]
                    arr[i] = key
                }
               
                break
            }

            if (!hasLeft) {
                if (arr[i] > key) {
                    _left = arr[i]
                    hasLeft = true
                } else {
                    i++
                }
            }
    
            if (!hasRight) {
                if (arr[j] < key) {
                    _right = arr[j]
                    hasRight = true
                } else {
                    j--
                }
            }
        }

        // ----- exchange -----------
        if (hasRight && hasLeft) {
            arr[i] = _right
            arr[j] = _left
        }
       
        // ------ continue ------------
        if (i < j) {
            i++
            j--
            hasRight = false
            hasLeft = false
            sortCore()
        }
    }

    sortCore()

    console.log(arr, i)
    // resultArr[i] = key
    let midValue = [key]
    
    return [arr.slice(0, i), arr.slice(i+1, arr.length), i]
}

function sortLoop (arr) {
    let result = sort(arr)
    if (result[2] !== 0) {
        sortLoop(result[0])
        // sortLoop(result[1])
    }
}

sortLoop(sourceArr)

console.log(resultArr, 666666666666)