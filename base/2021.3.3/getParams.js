function getUrlParam(sUrl, sKey) {
    let params = sUrl.split("?")[1].split("&")
    let arr = []
    params.forEach(item => {
    	let res = item.split('=')
    	if (res[0] === sKey) {
    		arr.push(item.split('=')[1])
    	}
        
    })
    return arr
}

let res = getUrlParam("http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe", "key")
console.log(res)