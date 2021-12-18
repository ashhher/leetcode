/*
 * @lc app=leetcode.cn id=1219 lang=javascript
 *
 * [1219] 黄金矿工
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
    const row_num = grid.length,
        col_num = grid[0].length;

    /* -------------- O(4^m*n * m*n) - DFS ------------ */
    let res = 0;

    for (let i = 0; i < row_num; i++) {
        for (let j = 0; j < col_num; j++) {
            if (grid[i][j] !== 0)
                // 每个不为0的方格都做一次起点
                dfs(i, j, 0);
        }
    }

    return res;

    function dfs(row, col, cur_total) {
        if (grid[row][col] === 0) {
            // 【1】若为死路 记录最大结果
            if (cur_total > res) res = cur_total;
            return;
        }

        let cur = grid[row][col];
        grid[row][col] = 0;

        // 【2】向四个方向尝试
        // up
        if (row - 1 > -1) dfs(row - 1, col, cur_total + cur);
        //down
        if (row + 1 < row_num) dfs(row + 1, col, cur_total + cur);
        //left
        if (col - 1 > -1) dfs(row, col - 1, cur_total + cur);
        // right
        if (col + 1 < col_num) dfs(row, col + 1, cur_total + cur);

        // 【3】该方格所有方向已尝试 回溯
        grid[row][col] = cur;
    }

};
// @lc code=end
// grid = [
//     [1, 0, 7],
//     [2, 0, 6],
//     [3, 4, 5],
//     [0, 3, 0],
//     [9, 0, 20]
// ]
// console.log(getMaximumGold(grid));