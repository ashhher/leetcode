/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    /* ================ DFS ================ */
    // 如果没有root直接返回null
    if (root === null) return null;
    // 如果查到了root.val等于key，则检查是否有左右子树
    if (root.val === key) {
        // 如果是单一左/右子树，则用子树代替自己即可
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;
        // 如果左右子树都有，则找当前root跟的后继，找到后继后删除，将后继的值赋值给根的值
        let next = root.right;
        while (next.left) next = next.left;
        root.right = deleteNode(root.right, next.val);
        root.val = next.val;
        return root;
    }
    // 如果当前节点的值大于key，则向左子树删除查找，反之亦然
    if (root.val > key)
        root.left = deleteNode(root.left, key);
    else
        root.right = deleteNode(root.right, key);
    return root;
};
// @lc code=end