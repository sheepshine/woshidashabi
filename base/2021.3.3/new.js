// 创建一个对象
// 指向原型链
// 改变this指向
// 返回obj或者函数内容

Function.prototype.myNew = function (fn, arg) {
	let obj = Object.create(fn.prototype)
	obj.constructor = fn
	let res = fn.apply(obj, arg) 
	return typeof res === "object" ? res : obj
}
