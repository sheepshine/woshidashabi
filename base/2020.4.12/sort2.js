let arr = [66, 22, 99, 78, 103]
let arr2 = [100, 66, 22, 99, 78, 103, 23,67,87,87,9]

function sort (arr) {
    for (let i = arr.length; i > 0; i--) {
        sortCore(arr, i)
    }
    console.log(arr)
}

function sortCore (arr, n) {
    for (let i = 0; i < n; i++) {
        if (arr[i] < arr[i+1]) {
            let midvalue = 0
            midvalue = arr[i + 1]
            arr[i + 1] = arr[i]
            arr[i] = midvalue
        }
    }
}

sort(arr)
sort(arr2)