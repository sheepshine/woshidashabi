function run (taskDef) {
	let task = taskDef();

	let result = task.next();

	function step () {
		if (!result.done) {
			if (typeof result.value === "function") {
				result.value(function(err, data) {
					if (err) {
						result = task.throw(err);
						return;
					}
					result = task.next(data);
					step();
				})
			} else {
				result = task.next(result.value);
				step()
			}
		}
	}
	step();
}

function fetchData() {
	return function(callback) {
		setTimeout(function() {
			callback(null, "hi")
		}, 1000)
	}
}

run(function *(){
	let value = yield 1
	console.log(value)
	value = yield fetchData()
	console.log(value)
	value = yield 3
	console.log(value)
})
