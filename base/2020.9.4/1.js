class Heap {
	constructor(arr) {
		this.data = [...arr]
		this.size = this.data.length
	}

	maxHeapify(i) {
		let max = i
		if (i >= this.size) {
			return
		}

		const l = i * 2 + 1
		const r = i * 2 + 2

		if (l < this.size && this.data[l] > this.data[max]) {
			max = l
		}

		if (r < this.size && this.data[r] > this.data[max]) {
			max = r
		}

		if (max === i) {
			return
		}

		const t = this.data[i]
		this.data[i] = this.data[max];
		this.data[max] = t;

		// 递归向下继续执行

    	return this.maxHeapify(max);
	}
}

