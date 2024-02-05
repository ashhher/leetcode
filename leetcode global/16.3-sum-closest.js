/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let res = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length; i++) {
        let l = i + 1,
            r = nums.length - 1;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (Math.abs(sum - target) < Math.abs(res - target))
                res = sum;
            if (sum > target)
                r--;
            else
                l++;
        }
    }
    return res;
};
// @lc code=end