/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const len = nums.length;
    nums = nums.sort();
    let res = [];

    /* ------------ 回溯 + 剪枝 ------------ */
    const recurse = p => {
        if (p.length === len) {
            // 满足条件 插入到结果集并跳出
            res.push(p.slice(0));
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // 剪枝
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            let cur = nums.splice(i, 1)[0];
            p.push(cur);
            recurse(p);
            // 回溯
            nums.splice(i, 0, cur);
            p.pop();
        }
    }
    recurse([]);
    return res;
};
// @lc code=end
// let nums = [1, 1, 2];
// console.log(permuteUnique(nums));