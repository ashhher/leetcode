/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    /* ------------------ dfs ------------------ */
    let res = [];
    const dfs = (root, sum, arr) => {
        if (root === null) return;
        sum += root.val;
        arr.push(root.val);
        if ((sum === targetSum) && (!root.left && !root.right)) {
            res.push(arr.slice(0));
            console.log(arr.slice(0));
            arr.pop();
            return;
        }
        dfs(root.left, sum, arr);
        dfs(root.right, sum, arr);
        arr.pop();
    }
    dfs(root, 0, []);
    return res;
};
// @lc code=end