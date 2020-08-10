const arr = [1,2,3,4,5,6,7,8,9,10,11,12, 13,15,19]

function getINdex(arr, key) {
	let low = 0;
	let height = arr.length - 1;
	while(low <= height) {
		let mid = Math.floor((low + height) / 2);
		if (key === arr[mid]) {
			return mid
		} else {
			if (key > arr [mid]) {
				low = mid + 1
			} else {
				height = mid - 1
			}
		}
	}
	return -1
}

console.log(getINdex(arr, 5))