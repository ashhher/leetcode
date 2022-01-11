/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    /* ------------------ dfs ------------------ */
    // let res = [];
    // const dfs = (root) => {
    //     if (root === null) return;
    //     res.push(root.val);
    //     dfs(root.left);
    //     dfs(root.right);
    // }
    // dfs(root);
    // return res;

    /* ------------------ 队列 ------------------ */
    if (root === null) return [];
    let queue = [],
        res = [];
    queue.push(root);
    while (queue.length) {
        let temp = queue.pop();
        res.push(temp.val);
        if(temp.right) queue.push(temp.right);
        if(temp.left) queue.push(temp.left);
    }
    return res;

};
// @lc code=end