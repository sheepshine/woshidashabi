var divisorGame = function(N) {
	for (let i =1; i <N; i++ ) {
		if (n % i == 0) {
			divisorGame(i)
		}
	}
};

divisorGame(2)