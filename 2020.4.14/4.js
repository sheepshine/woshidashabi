function Player (card) {
    this.card = card
    this.start = 0
}

Player.prototype.pay = function () {
    let value = this.card[this.start]
        this.start++
        return value
}

Player.prototype.reward = function (arr) {
    this.card = this.card.concat(arr)
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
        let target = this.card[this.card.length - 1]
        let targetIndex = -1
        for(let i = 0; i < this.card.length; i++) {
            console.log(i, target)
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
    while(a.card.length > 0 && b.card.length > 0) {
        table.add(a.pay())
        let checkResultA = table.checkReward()
        if(checkResultA!= -1) {
            a.reward(table.remove(checkResultA))
        }
        
        table.add(b.pay())
        let checkResultB = table.checkReward()
        if(checkResultB!= -1) {
            b.reward(table.remove(checkResultB))
        }
    }
    console.log('a:',a.card,'b:', b.card, 'table:', table.card)
}

Game(a, b)


