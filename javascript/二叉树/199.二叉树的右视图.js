/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
    /* ------------------ dfs ------------------ */
    // let res = [];
    // const dfs = (root, layer) => {
    //     if (root === null) return;
    //     if (!res[layer]) res[layer] = root.val;
    //     dfs(root.right, layer + 1);
    //     dfs(root.left, layer + 1);
    // }
    // dfs(root,0);
    // return res;

    /* ============= 队列层序遍历 ============= */
    let res = [];
    if (!root) return res;
    let queue = [root];
    while (queue.length) {
        let len = queue.length;
        let level = [];
        for (let i = 0; i < len; i++) {
            let t = queue.shift();
            level.push(t.val);
            if (t.left) queue.push(t.left);
            if (t.right) queue.push(t.right);
        }
        res.push(level[level.length - 1]); //最右
    }
    return res;
};
// @lc code=end