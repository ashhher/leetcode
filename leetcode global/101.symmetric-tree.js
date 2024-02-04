/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {

    let checkSymmetric = (leftTree, rightTree) => {

        if (leftTree && rightTree && leftTree.val === rightTree.val) {
            return checkSymmetric(leftTree.left, rightTree.right) && checkSymmetric(leftTree.right, rightTree.left)
        } else if (!leftTree && !rightTree) {
            return true;
        } else {
            return false;
        };
    }

    return checkSymmetric(root.left, root.right);

};
// @lc code=end