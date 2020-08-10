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
var isBalanced = function(root) {
    if (!root) {
        return true
    }
    if (Math.abs(deepNum(root.left) - deepNum(root.right)) > 1 ) {
        return false
    } else {
        return isBalanced(root.left) && isBalanced(root.right)
    }
    function deepNum (node) {
        if (!node) {
            return 0
        }
        const right = deepNum(node.right) + 1
        const left = deepNum(node.left) + 1
        return Math.max(right, left)
    }
};