/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    /* ---------------- 双指针 ---------------- */
    // const n = [...nums];
    // n.sort((a, b) => a - b);
    // let l = 0,
    //     r = n.length - 1;
    // while (l <= r) {
    //     if (n[l] + n[r] > target) {
    //         r--;
    //     } else if (n[l] + n[r] === target) {
    //         break;
    //     } else {
    //         l++;
    //     }
    // }
    // l = nums.indexOf(n[l]);
    // nums[l] = Infinity;
    // r = nums.indexOf(n[r]);
    // return [l, r];

    /* ============= 哈希表 ============= */
    let map = new Map();
    for (let i = 0, len = nums.length; i < len; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];

};
// @lc code=end