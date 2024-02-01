/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0,
        right = height.length - 1,
        maxWater = 0;

    while (left < right) {
        let newWater = Math.min(height[left], height[right]) * (right - left);
        if (newWater > maxWater) maxWater = newWater;
        if (height[left] < height[right])
            left++;
        else
            right--;
    }

    return maxWater;

};
// @lc code=end