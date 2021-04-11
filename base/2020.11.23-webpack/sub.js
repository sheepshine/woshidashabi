function PubSub () {
	this.handlers = {}
}

PubSub.prototype = {
	on: function (eventType, cb) {
		var self = this;
		if (!(eventType in self.handlers)) {
			self.handlers[eventType] = [];
		}
		self.handlers[eventType].push(cb)
		return self
	},
	emit: function (eventType) {
		var self = this
		var argsArr = Array.prototype.slice.call(arguments, 1)
		for (var i = 0; i<self.handlers[eventType].length; i++){
			self.handlers[eventType][i].apply(self, argsArr)
		}
		return self
	}
}

var pub = new PubSub()
pub.on("abc", function (a,b,c) {
	console.log(a, b, c)
})

pub.emit('abc',33,44,66);

