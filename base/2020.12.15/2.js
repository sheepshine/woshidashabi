const plane = function (name) {
	this.name = name;
}

plane.prototype.send = function (msg, to) {
	console.log(this.name + "发送了信息")
	tower.send(msg, to)
}

plane.prototype.recive = function (msg) {
	console.log(this.name + "【接收到】" + msg)
}

const tower = {
	all: {},
	register: function (plane) {
		this.all[plane.name] = plane
	},
	send: function (msg, to) {
		this.all[to.name].recive(msg)
	}
}

const plane1 = new plane("air china")
const plane2 = new plane("china eastern")
tower.register(plane1)
tower.register(plane2)
plane1.send("ready to push back", plane2)