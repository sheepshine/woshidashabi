const devide = function (array, start, end) {
    if (start >= end) {
        return array
    }
    const baseIndex = Math.floor((start + end) / 2),
          i = start,
          j = end;

    while (i <= j) {
        while (array[i] < array[baseIndex]) {
            i++
        }
        while (array[j] > array[baseIndex]) {
            j--
        }

        if (i<=j) {
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
            i++
            j--
        }
    }

    return i
}

const sort = function (array, start, end) {
    if (array.length < 1) {
        return array
    }
    const index = devide(array, start, end)
    if (start < index -1) {
        devide(array, start, index - 1)
    }

    if(end > index) {
        devide(array, index, end);
    }

    return array;
}