/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
    const dfs = (root) => {
        if (root === null) return 0;
        let dl = dfs(root.left),
            dr = dfs(root.right);
        if (!dl || !dr) return dl + dr + 1;
        return Math.min(dl, dr) + 1;
    }
    return dfs(root);
};
// @lc code=end