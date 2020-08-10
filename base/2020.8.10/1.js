function createIterator (items) {
	let i = 0;
	return {
		next: function () {
			var done = i >= items.length;
			var value = !done ?items[i++]: undefined;
			return {
				done,
				value
			}
		}
	}
}

const iterator = createIterator([1, 2, 3])
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())