var isSymmetric = function(root) {
    if (root == null) {
    	return true
    }
    function check (left, right) {
    	if (left == null && right == null) {
    		return true
    	}
    	if ((left && right) && (left.val == right.val) && check(left.left, right.right) && check(left.right, right.left)) {
    		return true
    	}
    	
    	return false
    	
    }
    return check(root.left, root.right)
};