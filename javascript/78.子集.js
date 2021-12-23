/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    /* -------------- DFS回溯 ------------ */
    const len = nums.length;
    let res = [[]];

    const dfs = (arr, start) => {
        for (let i = start; i < len; i++) {
            arr.push(nums[i]);
            res.push(arr.slice());
            dfs(arr, i + 1);
            arr.pop();
        }
    }

    dfs([], 0);
    return res;
};
// @lc code=end

// let nums = [1,2,3];
// console.log(subsets(nums));