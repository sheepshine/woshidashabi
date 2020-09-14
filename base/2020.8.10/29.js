var spiralOrder = function(matrix) {
	if (matrix.length === 0) {
		return []
	}
	let n = matrix.length // 初始右边界，每循环一次-1
	let m = matrix[0].length // 初始下边界，每循环一次-1
	let xmin = 1   // 初始上边界，每循环一次+1
	let ymin = 0	// 初始左边界，每循环一次+1
	let i = 0  
	let j = 0   // x坐标
	let k = 0   // y坐标
	let curDir = "right"  // 当前循环方向
	let result = []
	let dirMap = {
		"right": right,
		"down": down,
		"left": left,
		"up": up
	}
	print()
	while(i < matrix.length * matrix[0].length - 1) {
		dirMap[curDir]()
		i++
	}

	function right () {
		if (k >= m - 1) {
			curDir = "down"
			m--
			down()
		} else {
			k++
			print()
		}
	}

	function down () {
		if (j >= n - 1) {
			curDir = "left"
			n--
			left()
		} else {
			j++
			print()
		}
	}

	function left () {
		if (k <= ymin) {
			curDir = "up"
			ymin++
			up()
		} else {
			k--
			print()
		}
	}

	function up () {
		if (j <= xmin) {
			curDir = "right"
			xmin++
			right()
		} else {
			j--
			print()
		}
	}

	function print () {
		console.log(j, k)
		result.push(matrix[j][k])
	}
	console.log(result)
	return result
};

// spiralOrder([
//  [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ])
spiralOrder([
	[1,2,3,4,5],
	[6,7,8,9,10],
	[11,12,13,14,15],
	[16,17,18,19,20],
	[21,22,23,24,25]
])