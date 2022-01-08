/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    /* ------------------ dfs ------------------ */
    // let res = [];
    // const dfs = (root, layer) => {
    //     if(root == null) return;
    //     if (res[layer])
    //         res[layer].push(root.val);
    //     else
    //         res[layer] = [root.val];
    //     dfs(root.left, layer + 1);
    //     dfs(root.right,layer + 1);
    // }

    // dfs(root,0);
    // return res;
    /* ================ bfs队列 ================ */
    const ret = [];
    if (!root) return ret;
    const q = [];
    q.push(root);
    while (q.length !== 0) {
        const currentLevelSize = q.length;
        ret.push([]);
        for (let i = 1; i <= currentLevelSize; ++i) {
            const node = q.shift();
            ret[ret.length - 1].push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }
    return ret;

};
// @lc code=end