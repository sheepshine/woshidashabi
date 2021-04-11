var interpret = function(command) {
	let curStr = ""
    // for (let i = 0; i < command.length; i++) {
    // 	let curS = [command[i]]
    // 	if (curS ==)
    // 	curStr += strMap[command[i]]
    // }
    let cur = 0
    while (cur < command.length) {
    	console.log(cur, curStr)
    	if (command.indexOf("()", cur) == cur) {
    		curStr+="o"
    		cur+= 2
    	}
    	if (command.indexOf("(al)", cur) == cur) {
    		curStr+="al"
    		cur+= 4
    	}
    	if (command.indexOf("G", cur) == cur) {
    		curStr+="G"
    		cur+= 1
    	}
    	if (command.indexOf("(al)", cur) < 0 && command.indexOf("G", cur) < 0 && command.indexOf("()", cur) < 0)
    	{
    		break
    	}
    }
    console.log(curStr)
    return curStr
};

interpret("GGG")