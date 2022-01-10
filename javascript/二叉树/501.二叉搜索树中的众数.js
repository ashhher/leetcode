/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function (root) {
    /* ----------------- 字典排序 ----------------- */
    // let data = {},
    //     res = [];
    // const recurse = (root) => {
    //     if (root === null) return 0;
    //     if (data[root.val]) ++data[root.val];
    //     else data[root.val] = 1;
    //     recurse(root.left);
    //     recurse(root.right);
    // };
    // recurse(root);
    // var items = Object.keys(data).map(function (key) {
    //     return [key, data[key]];
    // });
    // items.sort(function (first, second) {
    //     return second[1] - first[1];
    // });
    // res.push(items[0][0]);
    // for (let i = 1; i < items.length; i++) {
    //     if (items[i][1] === items[i - 1][1])
    //         res.push(items[i][0]);
    //     else
    //         break;
    // }
    // return res;

    /* ================ 中序遍历 ================ */
    let base = 0, count = 0, maxCount = 0;
    let answer = [];

    const update = (x) => {
        if (x === base) {
            ++count;
        } else {
            count = 1;
            base = x;
        }
        if (count === maxCount) {
            answer.push(base);
        }
        if (count > maxCount) {
            maxCount = count;
            answer = [base];
        }
    }

    const dfs = (o) => {
        if (!o) {
            return;
        }
        dfs(o.left);
        update(o.val);
        dfs(o.right);
    }

    dfs(root);
    return answer;
};

// @lc code=end