const arr = [5, 2, 8, 5, 6, 8, 8, 10]

function sort (arr) {
    const sortArr = new Array(11)

    arr.forEach(element => {
        if (isNaN(sortArr[element])) {
            sortArr[element] = 1
        } else {
            sortArr[element]++
        }
     });
     showSort(sortArr)
}

function showSort (arr) {
    arr.forEach((item, index) => {
        if (!isNaN(item)) {
            console.log(`score ${index} num ${item}`)
        }
    })

    arr.forEach((item, index) => {
        if (!isNaN(item)) {
            for(let i =0; i < item; i++) {
                console.log(index)
            }
        }
    })
}

sort(arr)