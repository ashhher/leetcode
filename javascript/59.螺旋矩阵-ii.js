/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    /* -------------- O(n^2) - 旋转 ------------ */
    // 模拟矩阵生成 旋转递增
    // let num = 1,
    //     row = 0,
    //     column = 0,
    //     res = new Array(n).fill(0).map(() => new Array(n).fill(0));
    // const total = n * n;

    // while (num <= total) {
    //     while (column < n && res[row][column] == 0) {
    //         res[row][column] = num;
    //         column++;
    //         num++;
    //     }

    //     // 逆时针旋转
    //     res = anti_rotation(res);
    //     if ((row + column) == n) {
    //         column = n - column + 1;
    //     } else {
    //         row++;
    //         column = row;
    //     }
    // }

    // // 转正
    // while(res[0][0] != 1) {
    //     res = anti_rotation(res);
    // }
    // return res;

    // // 逆时针旋转
    // function anti_rotation(matrix) {
    //     if (matrix.length == 0) return;
    //     const rows = matrix.length,
    //         columns = matrix[0].length;
    //     const new_matrix = new Array(columns).fill(0).map(() => new Array(rows).fill(0));
    //     for (let i = 0; i < rows; i++) {
    //         for (let j = 0; j < columns; j++) {
    //             new_matrix[columns - j - 1][i] = matrix[i][j];
    //         }
    //     }
    //     return new_matrix;
    // }

    /* ============ O(n^2) - 四边 ========== */
    // 记录上下左右四个边位置 每结束一边 该边往内缩1
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0)),
        top = 0,
        buttom = n - 1,
        left = 0,
        right = n - 1,
        num = 1;

    while (true) {
        for (let i = left; i <= right; i++) res[top][i] = num++;
        if (++top > buttom) break;

        for (let i = top; i <= buttom; i++) res[i][right] = num++;
        if (--right < left) break;

        for (let i = right; i >= left; i--) res[buttom][i] = num++;
        if (--buttom < top) break;

        for (let i = buttom; i >= top; i--) res[i][left] = num++;
        if (left++ > right) break;
    }
    return res;
};
// @lc code=end