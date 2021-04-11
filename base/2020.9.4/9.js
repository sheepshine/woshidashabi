class Observer {
	constructor (fn) {
		this.update = fn
	}
}

class Subject {
	constructor () {
		this.observer = []
	}
	addObserver(observer) {
		this.observer.push(observer)
	}
	notify() {
		this.observers.forEach(observer => {
			observer.update()
		})
	}
}

var subject = new Subject() 