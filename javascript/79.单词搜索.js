/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const [row_len, col_len] = [board.length, board[0].length];
    let res = false;

    /* -------------- DFS ------------ */
    const dfs = (row, col, str) => {
        // 满足条件
        if (str.length === 0) {
            res = true;
        }

        // 边界条件
        if (row < 0 || row >= row_len || col < 0 || col >= col_len) return;

        // 标记已访问
        let temp = board[row][col];
        board[row][col] = '#';

        // 四个方向检查
        if (str.slice(0, 1) === temp) {
            let left = str.slice(1, str.length);
            dfs(row - 1, col, left);
            dfs(row + 1, col, left);
            dfs(row, col - 1, left);
            dfs(row, col + 1, left);
        }

        // 回溯
        board[row][col] = temp;
    }

    /*********************************/
    for (let i = 0; i < row_len; i++) {
        for (let j = 0; j < col_len; j++) {
            dfs(i, j, word);
            // 若满足条件 直接返回
            if (res) return res;
        }
    }
    return res;
};
// @lc code=end

// let board = [
//         ["A", "B", "C", "E"],
//         ["S", "F", "C", "S"],
//         ["A", "D", "E", "E"]
//     ],
//     word = "ABCCED";

// let board = [
//         ["A", "B", "C", "E"],
//         ["S", "F", "C", "S"],
//         ["A", "D", "E", "E"]
//     ],
//     word = "ABCB";

// console.log(exist(board, word));