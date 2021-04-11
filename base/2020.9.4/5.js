function new (func) {
	let res = {}
	if (func.prototype) {
		let res.__proto__ = func.prototype
	}
	let ret = func.apply(res, Array.prototype.slice.call(arguments, 1))
	if ((typeof ret === "objcet" || typeof ret === "function") && ret !==null ) {
		return ret
	}
	return res
}