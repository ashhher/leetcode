/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
    /* ---------------- dfs ---------------- */
    let max_sum = root.val;
    const dfs = (root) => {
        if (root === null) return 0;
        let sl = Math.max(0, dfs(root.left)),
            sr = Math.max(0, dfs(root.right)),
            sum = root.val + sl + sr;
        max_sum = Math.max(sum, max_sum);
        return Math.max(sl, sr) + root.val;
    }
    dfs(root);
    return max_sum;
};
// @lc code=end