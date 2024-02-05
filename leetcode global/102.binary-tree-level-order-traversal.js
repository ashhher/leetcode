/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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

    let result = [];

    const traverse = (node, layer) => {
        if (!node) return;
        if (layer >= result.length) result.push([node.val]);
        else result[layer].push(node.val);

        node.left && traverse(node.left, layer + 1);
        node.right && traverse(node.right, layer + 1);
    }

    traverse(root, 0);
    return result;
};
// @lc code=end