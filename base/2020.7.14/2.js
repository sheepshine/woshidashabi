var lengthOfLongestSubstring = function(s) {
    let max = 0
    let lastIndex = 1
    let book = {}
    for (let i = 0; i < s.length; i++) {
        // console.log(i)
        if (s[i -1]) {
            book[s[i -1]] = false
        }
        // let _s = s[i]
        book[s[i]] = true
        if (i == lastIndex) {
            lastIndex = lastIndex + 1
        }
        for (let j = lastIndex; j < s.length; j++) {
            console.log(i, lastIndex, book)
            if (!book[s[j]]) {
                // _s = _s + s[j]
                book[s[j]] = true
            } else {
                lastIndex = j
                break
            }
        }
        let length = lastIndex - i
        if (length == 1 && s[lastIndex] && s[i] != s[lastIndex]) {
            length = length + 1
        }
        // console.log(max, i, lastIndex, book)
        if (length > max) {
            max = length
        }
    }
    console.log(max)
    return max
};
// lengthOfLongestSubstring("aabcabcbb")
lengthOfLongestSubstring("bwf")
// lengthOfLongestSubstring("aa")