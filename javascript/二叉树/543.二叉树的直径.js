/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    /* ---------------- dfs ---------------- */
    let max_d = 0;
    const dfs = (root) => {
        if (root === null) return 0;
        let ll = dfs(root.left);
        let lr = dfs(root.right);
        if (ll + lr > max_d) max_d = ll + lr;
        return Math.max(ll, lr) + 1;
    }
    dfs(root);
    return max_d;
};
// @lc code=end