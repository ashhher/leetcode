/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const height = obstacleGrid.length,
        width = obstacleGrid[0].length,
        path = new Array(height).fill(0).map(() => new Array(width).fill(0));

    path[height - 1][width - 1] = obstacleGrid[height - 1][width - 1] ? 0 : 1;

    for (let i = height - 1; i >= 0; i--) {
        for (let j = width - 1; j >= 0; j--) {
            if (i === height - 1 && j === width - 1) continue;
            let rightPath = i === height - 1 ? 0 : path[i + 1][j];
            let bottomPath = j === width - 1 ? 0 : path[i][j + 1];

            path[i][j] = (obstacleGrid[i][j] ? 0 : 1) * (rightPath + bottomPath);
        }
    }

    return path[0][0];
};
// @lc code=end