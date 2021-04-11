var maxDepth = function(root) {
	let max = 0
	if (root == null) {
		return 0
	} else {
		const left = maxDepth(root.left)
		const right = maxDepth(root.right)
		return Math.max(left, right) + 1
	}
};