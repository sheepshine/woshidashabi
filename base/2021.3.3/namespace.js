function namespace(oNamespace, sPackage) {
	const arr = sPackage.split(".")
	let res = oNamespace
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] in oNamespace) {
			if (!oNamespace[arr[i]] instanceof Object) {
				oNamespace[arr[i]] = {}
			} 
		} else {
			oNamespace[arr[i]] = {}
		}
		oNamespace = oNamespace[arr[i]];  
	}

	return res
    
}

namespace({a: {test: 1, b: 2}}, 'a.b.c.d')

// {a: {test: 1, b: {c: {d: {}}}}}