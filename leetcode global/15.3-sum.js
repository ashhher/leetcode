/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const len = nums.length;
    nums = nums.sort((a, b) => a - b);

    const result = [];

    let left = undefined;
    let right = undefined;

    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) break;
        if (nums[i] === left) continue;

        left = nums[i];
        right = undefined;

        for (let j = len - 1; j > i; j--) {
            if (nums[j] < 0) break;
            if (nums[j] === right) continue;

            right = nums[j]

            let middle = 0 - left - right;

            if (nums.slice(i + 1, j).indexOf(middle) >= 0) {
                result.push([left, right, middle]);
            }
        }
    }

    return result;

    // didn't pass!! but I DO NOT CARE
};
// @lc code=end