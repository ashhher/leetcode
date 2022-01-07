/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function (root) {
    /* ------------------ dfs回溯 ------------------ */
    // let res = 0;
    // if(root == null) return 0;

    // const dfs = (root, num) => {
    //     num.push(root.val);
    //     if (root.left != null) {
    //         dfs(root.left, num);
    //     }
    //     if (root.right != null) {
    //         dfs(root.right, num);
    //     }
    //     if (root.left == null && root.right == null) {
    //         res += parseInt(num.join(""));
    //     }
    //     //回溯
    //     num.pop();
    // }
    // dfs(root,[]);
    // return res;

    /* ================ 极简dfs回溯 ================ */
    const dfs = (root, num) => {
        if (root == null) return 0;
        let temp = num * 10 + root.val;
        if (root.left == null && root.right == null)
            return temp;
        return dfs(root.left, temp) + dfs(root.right, temp);
    }
    return dfs(root, 0);
};
// @lc code=end