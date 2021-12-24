/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    /* -------------- DFS回溯 ------------ */
    const N = 9,
        row_len = board.length,
        col_len = board[0].length;

    // 记录每行 每列 每个区块的各个数字的状态
    const used_row = new Array(N).fill(0).map(() => new Array(N).fill(0)),
        used_col = new Array(N).fill(0).map(() => new Array(N).fill(0)),
        used_block = new Array(N / 3).fill(0).map(() => new Array(N / 3).fill(0).map(() => new Array(N).fill(0)));

    // 初始化
    const init = () => {
        for (let i = 0; i < row_len; i++) {
            for (let j = 0; j < col_len; j++) {
                if (board[i][j] === '.') {
                    continue;
                } else {
                    let num = parseInt(board[i][j]);
                    used_row[i][num - 1] = 1;
                    used_col[j][num - 1] = 1;
                    used_block[parseInt(i / 3)][parseInt(j / 3)][num - 1] = 1;
                }
            }
        }
    }

    // 通过当前位置 判断num是否可用
    const isValid = (row, col, num) => {
        if (used_row[row][num - 1] || used_col[col][num - 1] || used_block[parseInt(row / 3)][parseInt(col / 3)][num - 1])
            return false;
        else
            return true;
    }

    // 设置当前位置上的num状态
    const setUsed = (row, col, num, used) => {
        used_row[row][num - 1] = used;
        used_col[col][num - 1] = used;
        used_block[parseInt(row / 3)][parseInt(col / 3)][num - 1] = used;
    }

    const dfs = (row, col) => {
        // 找到结果 跳出
        if (col === N)
            return true;
        // 换行
        if (row === N)
            return dfs(0, col + 1);
        // 当前格子已有数字 跳到下个格子
        if (board[row][col] !== '.')
            return dfs(row + 1, col);

        for (let num = 1; num < N + 1; num++) {
            if (isValid(row, col, num)) {
                board[row][col] = '' + num;
                setUsed(row, col, num, 1);
                if (dfs(row + 1, col)) return true;
                // 回溯
                setUsed(row, col, num, 0);
                board[row][col] = '.';
            }
        }
    }

    init();
    dfs(0, 0);
    return;
};
// @lc code=end

// board = [
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ];
// solveSudoku(board);