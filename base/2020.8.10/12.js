var lengthOfLongestSubstring = function(s) {
    // let start = 0
    // let curS = ""
    // let longest = 0
    // while (start < s.length) {
    //     curS = s[start]
    //     let sMap = new Map()
    //     sMap.set(s[start], true)
    //     let end = start + 1
    //     while(end < s.length) {
    //         if (sMap.get(s[end])) {

    //             break
    //         } else {
    //             curS += s[end]
    //             sMap.set(s[end], true)
    //             end++
    //         }
    //     }
    //     longest = curS.length > longest ? curS.length : longest
        
    //     start++
    // }
    // return longest
    let start = 0
    let end = 0
    let max = 0
    let sMap = new Map()
    while (end < s.length) {
        if (sMap.has(s[end])) {
            start = Math.max(sMap.get(s[end]) + 1, start)
        }
        max = Math.max(max, end - start + 1)
        sMap.set(s[end], end)
        end++
   }
   console.log(max)
    return max
};

lengthOfLongestSubstring("bbbbb")