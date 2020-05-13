Function.prototype.before = function (beforeFn) {
    var _self = this
    return function () {
        if (beforeFn.apply(this, arguments) === false) {
            return
        } else {
            
            return _self.apply(this, arguments)
        }
    }
}

const validata = function (username, password) {
    console.log(username, password)
    if (!username) {
        return false
    }
    if (!password) {
        return false
    }
}

let formSubmit = function (username, password) {
    console.log(username)
    let param = {
        username,
        password
    }
    console.log('is submiting', param)
}

formSubmit = formSubmit.before(validata)

formSubmit(111, 222)