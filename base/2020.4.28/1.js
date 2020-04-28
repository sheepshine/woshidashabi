const Iterator = function (obj) {
    let current = 0

    let next = function () {
        current += 1
    }

    let isDone = function () {
        return current >= obj.length
    }

    let getCurrentItem = function () {
        return obj[current]
    }

    return {
        next,
        isDone,
        getCurrentItem
    }
}

const compare = function (iterator1, iterator2) {
    while (!iterator1.isDone() && !iterator2.isDone()) {
        if (iterator1.getCurrentItem() !== iterator2.getCurrentItem()) {
            throw new Error('不相等')
        } else {
            iterator1.next()
            iterator2.next()
        }
    }
    console.log('相等')
}

const iterator1 = Iterator([1,2,3,4,5,6,7,8,9,10])
const iterator2 = Iterator([1,2,3,4,5,6,7,8,9,10])
compare(iterator1, iterator2)