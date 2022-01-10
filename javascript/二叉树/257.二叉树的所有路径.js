/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    /* ------------------ dfs ------------------ */
    let res = [];
    const dfs = (root, path) => {
        if (root == null) return;
        path += ('->' + root.val);
        if (root.left == null && root.right == null)
            res.push(path.slice(2,path.length));
        dfs(root.left, path);
        dfs(root.right, path);
    }

    dfs(root, '');
    return res;
};
// @lc code=end