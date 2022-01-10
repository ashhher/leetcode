/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    /* ================ dfs ================ */
    // if (root == null) {
    //     return 0;
    // }

    // let ret = rootSum(root, targetSum);
    // ret += pathSum(root.left, targetSum);
    // ret += pathSum(root.right, targetSum);
    // return ret;

    /* ================ map + 前缀和 ================ */
    const dfs = (root, presum) => {
        if (!root) return 0;
        map.set(presum, (map.get(presum) || 0) + 1);
        const newSum = presum + root.val;
        // 寻找有无(newSum - targetSum)
        res += map.get(newSum - targetSum) || 0;
        // 向下遍历
        dfs(root.left, newSum);
        dfs(root.right, newSum);
        // 避免相同节点值被重复计算，确保算出的sum是从上到下的一条路径
        map.set(presum, map.get(presum) - 1);
    };

    // map中，key存的是前缀和，value存的是前缀和的数目
    const map = new Map();
    let res = 0;
    dfs(root, 0);
    return res;
};

// const rootSum = (root, targetSum) => {
//     let ret = 0;

//     if (root == null) {
//         return 0;
//     }
//     const val = root.val;
//     if (val === targetSum) {
//         ret++;
//     } 

//     ret += rootSum(root.left, targetSum - val);
//     ret += rootSum(root.right, targetSum - val);
//     return ret;
// }

// @lc code=end