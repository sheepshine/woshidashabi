var longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return ""
    }
    let s = strs[0]
    let index = 1
	while (index < strs.length) {
        let key = 0
        let _s = ""
        if (!strs[index]) {
            s = ""
            break
        }
        while(key < strs[index].length || key < s.length) {
            if (strs[index].indexOf(_s) === 0) {
                s = _s
                break
            } else {
                _s += strs[index][key]
                key++
            }
        }
        index++
    }
    console.log(s)
    return s
};

longestCommonPrefix([])