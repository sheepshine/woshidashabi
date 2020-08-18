var myAtoi = function(str) {
	class AutoMan {
		constructor () {
			this.state = "start"
			this.str = str
			this.result = ""
			this.curS = ""
		}

		loop = () => {
			while(this.str) {
				this.curS = this.str.substr(0, 1)
				this.stateFn()
				this.typeRender()
				this.str = this.str.substr(1, this.str.length - 1)
			}
			this.resultFilter()
			return this.result || 0
		}

		stateFn () {
			if (this.curS === " " && this.state !== "count") {
				return
			}

			if (this.curS === " " && this.state === "count") {
				this.state = "finish"
				return
			}

			if ((this.curS === "+" || this.curS === "-") && this.state !== "count") {
				this.state = "count"
				return 
			}

			if (!isNaN(this.curS)) {
				this.state = "count"
				return
			}

			this.state = "finish"
		}

		typeRender () {

			if (this.state === "count") {
				this.renderResult()
			}

			if (this.state === "finish") {
				this.str = ""
			}
		}

		renderResult () {
			this.result += this.curS
 		}

 		resultFilter () {
 			let { result } = this
 			if (this.result === "-" || this.result === "+") {
 				this.result = 0
 			}
 			if (this.result >= Math.pow(2, 31)) {
				this.result = Math.pow(2, 31) - 1
			} else if (this.result < Math.pow(-2, 31)) {
				this.result = Math.pow(-2, 31)
			}
			if (this.result[0] === "+") {
				this.result = this.result.substr(1)
			}
 		}
	}

	let automan = new AutoMan()
	return automan.loop()
}
console.log(myAtoi("42"))