/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    /* ---------------- 双指针 ---------------- */
    let left = 0,
        right = 0,
        sum = nums[0],
        res = nums.length;

    // 若总和小于target 直接返回0
    if (eval(nums.join('+')) < target) return 0;

    while (right < nums.length) {
        if (sum < target) {
            right++;
            sum += nums[right];
        } else {
            res = Math.min(res, right - left + 1);
            if (res === 1) break;
            sum -= nums[left];
            left++;
        }
    }
    return res;
};
// @lc code=end
// console.log(minSubArrayLen(15, [2, 14]));