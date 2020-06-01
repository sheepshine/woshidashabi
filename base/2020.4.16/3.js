const arr = [1,2,3]
let book = {}
let box = []
let step = 0

function render (step) {
    if (step > arr.length) {
        console.log(box, book)
        return 
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (book[i] !== 1) {
                console.log(step, 'step')
                box[step] = arr[i]
                book[i] = 1
                let _step = step + 1
                render(_step)
                book[i] = 0
            }
            console.log(box)
        }
    }
}

render(step)