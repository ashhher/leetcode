/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    /* -------------- O(m*n) ------------ */
    // 每走一遍最外圈四个边 
    // 把走过的删掉 会得到一个新矩形
    // 重复直到删完
    // let m = matrix.length,
    //     n = matrix[0].length,
    //     count = 0,
    //     res = [];
    // const total = m * n;

    // while (count < total) {
    //     for (let i = 0; i < n; i++) {
    //         res.push(matrix[0].shift());
    //         count++;
    //     }
    //     m--;
    //     if (m == 0) break;
    //     matrix.shift();

    //     for (let j = 0; j < m; j++) {
    //         res.push(matrix[j].pop());
    //         count++;
    //     }
    //     n--;
    //     if (n == 0) break;

    //     for (let i = n; i > 0; i--) {
    //         res.push(matrix[m - 1].pop());
    //         count++;
    //     }
    //     m--;
    //     matrix.pop();
    //     if (m == 0) break;

    //     for (let j = m; j > 0; j--) {
    //         res.push(matrix[j - 1].shift());
    //         count++;
    //     }
    //     n--;
    // }
    // return res;

    /* ============ O(m+n) - 削头 ========== */
    let res = [];
    while (matrix !== undefined) {
        // 削掉最上面一行
        res.push(...matrix.shift());
        // 逆时针旋转矩阵
        matrix = anti_rotation(matrix);
    }

    return res;

    // 逆时针旋转矩阵
    function anti_rotation(matrix) {
        if (matrix.length == 0) return;
        const rows = matrix.length,
            columns = matrix[0].length;
        const new_matrix = new Array(columns).fill(0).map(() => new Array(rows).fill(0));
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                new_matrix[columns - j - 1][i] = matrix[i][j];
            }
        }
        return new_matrix;
    }
};
// @lc code=end