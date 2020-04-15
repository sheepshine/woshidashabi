let isFinish = false
function Player (card) {
    this.card = card
    this.start = 0
}

Player.prototype.pay = function () {
    let value = this.card[this.start]
        this.start++
        if (!value) {
            isFinish = true
        } else {
            return value
        }
}

Player.prototype.reward = function (arr) {
    this.card = this.card.concat(arr)
    // console.log('reward', this.card, arr, this.card)
}

let table = {
    card: [],
    add: function (item) {
        this.card.push(item)
    },
    remove: function (j) {
        let arr = []
        let arrLength = this.card.length
        for (let i = 0; i < arrLength - j; i++) {
            arr.push(this.card.pop())
        }
        return arr
    },
    checkReward: function () {
        if (this.card.length < 2) {
            return -1
        }
        let target = this.card[this.card.length - 1]
        let targetIndex = -1
        console.log(this.card, target)
        for(let i = 0; i < this.card.length - 1; i++) {
            // console.log(i, target, this.card)
            if (this.card[i] === target) {
                targetIndex = i
                break
            }
        }
        return targetIndex
    }
}

let a = new Player([2,4,1,2,5,6])
let b = new Player([3,1,3,5,6,4])

function test () {
    table.card = [2,3,6,2,3,5,6]
    console.log(table.remove(table.checkReward()))
}
// test()

function Game (a, b) {
    while(!isFinish) {
        table.add(a.pay())
        let checkResultA = table.checkReward()
        // console.log(checkResultA, 11111111111111)
        if(checkResultA!= -1) {
            a.reward(table.remove(checkResultA))
        }
        // console.log(a, b, '---------')
        table.add(b.pay())
        let checkResultB = table.checkReward()
        if(checkResultB!= -1) {
            b.reward(table.remove(checkResultB))
        }
    }
    console.log('a:',a.card, a.start,'b:', b.card, b.start, 'table:', table.card)
}

Game(a, b)


