/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    /* ---------------- DP ---------------- */
    let m = obstacleGrid.length,
        n = obstacleGrid[0].length;
    const dp = new Array(m).fill().map(() => new Array(n).fill(0));

    // 初始化
    for (let i = m; i > 0 && obstacleGrid[i - 1][n - 1] === 0; i--) {
        dp[i - 1][n - 1] = 1;
    }
    for (let j = n; j > 0 && obstacleGrid[m - 1][j - 1] === 0; j--) {
        dp[m - 1][j - 1] = 1;
    }

    for (let i = m - 1; i > 0; i--) {
        for (let j = n - 1; j > 0; j--) {
            dp[i - 1][j - 1] = obstacleGrid[i - 1][j - 1] === 1 ? 0 : dp[i][j - 1] + dp[i - 1][j];
        }
    }

    return dp[0][0];
};
// @lc code=end
// let obstacleGrid = [
//     [0, 1],
//     [0, 0]
// ];
// console.log(uniquePathsWithObstacles(obstacleGrid));