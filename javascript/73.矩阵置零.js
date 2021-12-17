/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const row_num = matrix.length,
        column_num = matrix[0].length;

    /* -------------- O(m*n) - O(m+n) - 遍历 ------------ */
    // let flag_rows = {},
    //     flag_columns = {};

    // // 【1】第一遍遍历矩阵 将0元素的行列分别存到两个字典中
    // for (let i = 0; i < row_num; i++) {
    //     for (let j = 0; j < column_num; j++) {
    //         if (matrix[i][j] == 0) flag_rows[i] = flag_columns[j] = true;
    //     }
    // }

    // // 【2】第二遍遍历两字典 将矩阵对应行列置零
    // for (key in flag_rows) {
    //     for (let j = 0; j < column_num; j++) matrix[key][j] = 0;
    // }

    // for (key in flag_columns) {
    //     for (let i = 0; i < row_num; i++) matrix[i][key] = 0;
    // }

    // return matrix;

    /* =============== O(m*n) - O(1) - 遍历 ============= */
    let flag = 0; // 0 行列都无；1 列有行没有；2 行有列没有；3 行列都有；

    // 【1】先用一个变量存储矩阵的第一行及第一列是否含有0元素
    for (let i = 0; i < row_num; i++) {
        if (matrix[i][0] === 0) {
            flag += 1;
            break;
        }
    }

    for (let j = 0; j < column_num; j++) {
        if (matrix[0][j] === 0) {
            flag += 2;
            break;
        }
    }

    // 【2】再利用第一行及第一列存储剩下矩阵含0元素的行列
    for (let i = 1; i < row_num; i++) {
        for (let j = 1; j < column_num; j++) {
            if (matrix[i][j] == 0) matrix[i][0] = matrix[0][j] = 0;
        }
    }

    // 【3】遍历第一行及第一列 对标记为0的行列置零
    for (let i = 1; i < row_num; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 1; j < column_num; j++) matrix[i][j] = 0;
        }
    }

    for (let j = 1; j < column_num; j++) {
        if (matrix[0][j] === 0) {
            for (let i = 0; i < row_num; i++) matrix[i][j] = 0;
        }
    }

    // 【4】查看第一步的变量 判断是否要对第一行及第一列置零
    if (flag % 2 === 1) {
        for (let i = 0; i < row_num; i++) matrix[i][0] = 0;
    }

    if (flag / 2 >= 1) {
        for (let j = 0; j < column_num; j++) matrix[0][j] = 0;
    }

    return matrix;
};
// @lc code=end

// setZeroes([
//     [0, 1, 2, 0],
//     [3, 4, 5, 2],
//     [1, 3, 1, 5]
// ]);