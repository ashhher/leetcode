/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
    /* ------------------ dfs ------------------ */
    let res = true;
    const balance = (root) => {
        if (root == null) return 0;
        let l = balance(root.left);
        let r = balance(root.right);
        if (Math.abs(l - r) > 1) res = false;
        return Math.max(l, r) + 1;
    }
    balance(root);
    return res;
};
// @lc code=end