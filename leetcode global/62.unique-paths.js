/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    // Recursion but have [Time Limit Exceeded]
    // if (m === 1 || n === 1) return 1;
    // return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);

    // Dynamic Programming
    const arr = new Array(m).fill(1).map(() => new Array(n).fill(1));

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
        }
    }

    return (arr[m - 1][n - 1]);
};
// @lc code=end