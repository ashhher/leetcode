/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const len = nums.length;
    let res = [];

    /* ------------ 回溯 ------------ */
    const recurse = p => {
        if (p.length === len) {
            // 满足条件 插入到结果集并跳出
            res.push(p.slice(0));
            return;
        }

        for (let i = 0; i < nums.length; i++) {
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
let nums = [1, 2, 3];
console.log(permute(nums));