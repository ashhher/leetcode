/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const stairs = [0, 1, 2];
    if (n > 2) {
        let cur = 3;
        while (cur <= n) {
            stairs.push(stairs[cur - 1] + stairs[cur - 2]);
            cur++;
        }
    }

    return stairs[n];
};
// @lc code=end