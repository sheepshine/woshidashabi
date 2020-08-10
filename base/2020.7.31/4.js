/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
        return true
    }

    const map = (node1, node2) => {
        if (node1.left === node2.right && node1.right === node2.left) {
            return map(node1.left, node2.right) && map(node1.right, node2.left)
        } else {
        	return false
        }
    }
    return map(root.left, root.right)
};