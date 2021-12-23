/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    /* -------------- DFS回溯 ------------ */
    let nums = [],
        res = [];
    for (let i = 0; i < n; i++) {
        nums.push(i + 1);
    }

    const dfs = (arr, start) => {
        if (arr.length === k) {
            res.push(arr.slice());
            return;
        }

        for (let i = start; i < n; i++) {
            arr.push(nums[i]);
            dfs(arr, i + 1);
            arr.pop();
        }
    }

    dfs([], 0);
    return res;
};
// @lc code=end

// let n = 4,
//     k = 2;
// console.log(combine(4, 2));