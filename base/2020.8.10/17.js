var convert = function(s, numRows) {
       class Zmap {
        constructor () {
           this.map = []
           this.s = s
           this.x = 0
           this.y = 0
           this.downNum = 0
           this.rightNum = 0
           this.curDir = "down"
        }

        start = () => {
            if (numRows === 1) {
                return s
            }
            // this.mapInit()
            for (let i = 0; i < this.s.length; i++) {
                let s = this.s[i]

                this.renderItem(s)
                if (this.curDir === "down") {
                    if (this.downNum === numRows - 1) {
                        this.curDir = "right"
                        this.downNum = 0
                        this.right()
                    } else {
                        this.down() 
                    }
                } else {
                    if (this.rightNum === numRows - 1) {
                        this.curDir = "down"
                        this.rightNum = 0
                        this.down()
                    } else {
                        this.right()
                    }
                }
            }
            return this.renderString()
          
            console.log(this.map)
        }

        renderString () {
            let num = 0
            let result = ""
            // console.log(s.length)
            while(num < s.length) {
                this.map.forEach(item => {
                    result += item[num] ? item[num] : ""
                })
                num++
            }
            return result
        }

        renderItem (s) {
            if (!this.map[this.x]) {
                this.map[this.x] = []
            }
            this.map[this.x][this.y] = s
        }

        down = () => {
            this.y++
            this.downNum++
        }

        right = () => {
            this.x++
            this.y--
            this.rightNum++
        }
    }

    let zmap = new Zmap()
    return zmap.start()
};

convert("AB", 1)