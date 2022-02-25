/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    /* ---------------- DP ---------------- */
    // const dp = new Array(m).fill(1).map(() => new Array(n).fill(1));
    // for (let i = m - 1; i > 0; i--)
    //     for (let j = n - 1; j > 0; j--)
    //         dp[i - 1][j - 1] = dp[i][j - 1] + dp[i - 1][j];
    // return dp[0][0];

    /* ============= 组合数学 ============= */
    // 从左上角到右下角的过程中，我们需要移动 m+n-2 次，其中有 m-1 次向下移动，n−1 次向右移动。因此路径的总数，就等于从 m+n-2 次移动中选择 m-1 次向下移动的方案数，即组合数(m+n-2)!/(m-1)!(n-1)!
    let ans = 1;
    for (let x = n, y = 1; y < m; ++x, ++y) {
        ans = Math.floor(ans * x / y);
    }
    return ans;
};
// @lc code=end