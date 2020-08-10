/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return []
    }
    let arr = [[root.val]]
    function level(node, index) {
        let _arr = []
        if(node.left) {
            _arr.push(node.left.val)
        }
        if(node.right) {
            _arr.push(node.right.val)
        }
        if (_arr.length > 0) {
            if (arr[index] && arr[index].length > 0) {
                arr[index] =  arr[index].concat(_arr)
            } else {
                arr[index] =  _arr
            }
        }
        if(node.left) {
            level(node.left, index + 1)
        }
         if(node.right) {
             level(node.right, index + 1)
        }
    }
    level(root, 1)
    return arr
};