/*
 * @lc app=leetcode.cn id=980 lang=javascript
 *
 * [980] 不同路径 III
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
    const row_num = grid.length,
        col_num = grid[0].length;

    /* ============= O(4^m*n) - DFS回溯 ============= */
    let start_row = -1,
        start_column = -1,
        total = 1;

    // 【1】记录起始位置 计算应走总步数
    for (let i = 0; i < row_num; i++) {
        for (let j = 0; j < col_num; j++) {
            if (grid[i][j] === 0) total++;
            if (grid[i][j] === 1) {
                start_row = i;
                start_column = j;
            }
        }
    }

    let step = 0,
        res = 0;

    grid[start_row][start_column] = 0;

    // 【2】从起始位置开始DFS
    dfs(start_row, start_column);

    return res;

    function dfs(row, col) {
        // 【2.1】到达终点且走完所有方格 退回
        if (step === total && grid[row][col] === 2) {
            res++;
            return;
        }

        // 【2.2】方格不可走 退回
        if (grid[row][col] !== 0) return;

        // 【2.3】方格可走 增加步数并置为不可走
        step++;
        grid[row][col] = -1;

        // 【2.4】向各个方向尝试
        // up
        if (row - 1 > -1) dfs(row - 1, col);
        //down
        if (row + 1 < row_num) dfs(row + 1, col);
        //left
        if (col - 1 > -1) dfs(row, col - 1);
        // right
        if (col + 1 < col_num) dfs(row, col + 1);

        // 【2.5】该方格所有方向已尝试 回溯
        grid[row][col] = 0;
        step--;
    }
};


// @lc code=end

// res = uniquePathsIII([
//     [1, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 2, -1]
// ]);

// console.log(res);