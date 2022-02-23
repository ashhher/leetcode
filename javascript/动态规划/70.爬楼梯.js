/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const memo = [];
var climbStairs = function (n) {
    /* ---------------- 递归 ---------------- */
    // Time Limit Exceeded
    // 不能AC但答案是对的
    // if (n === 0 || n === 1) return 1;
    // return climbStairs(n - 1) + climbStairs(n - 2);

    /* ============== 记忆化递归 ============== */
    if (n === 0) return 1;
    if (n <= 3) return n;
    if (memo[n]) {
        return memo[n];
    } else {
        memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
    }
    return memo[n];

    /* ============== 动态规划 ============== */
    // 本质兔子数列？
    const dp = [0, 1, 2];
    if (n <= 2) return n;
    for (i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
// @lc code=end