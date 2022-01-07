/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
    /* ------------------ dfs回溯 ------------------ */
    const dfs = (root, rl) => {
        if (root == null) return 0;
        if (root.left == null && root.right == null) {
            if (rl == 'l')
                return root.val;
            else
                return 0;
        }
        return dfs(root.left, 'l') + dfs(root.right, 'r');
    }
    return dfs(root, 'r');

};
// @lc code=end