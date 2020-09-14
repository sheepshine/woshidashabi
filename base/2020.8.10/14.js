function zhuchong () {
	let chaiju = 0
	let wangqianfeng = 0
	let lijiabin = 0
	while(chaiju <= 40) {
		wangqianfeng = 0
		while (wangqianfeng <= 40) {
				lijiabin = 0
				while (lijiabin <= 40) {
					if (chaiju + wangqianfeng === 40 && lijiabin + wangqianfeng === 35 && lijiabin + chaiju === 15) {
						console.log("lijiabin: " + lijiabin, "wangqianfeng: " + wangqianfeng, "chaiju:" + chaiju)
					}
					lijiabin++
				}
			
			wangqianfeng++
		}
		chaiju++
	}
}

zhuchong()