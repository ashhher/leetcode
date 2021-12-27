/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    /* ================ DFS回溯 ================ */
    // 记录行 列 左斜向 右斜向是否有皇后
    const valid_row = new Array(n).fill(1),
        valid_col = new Array(n).fill(1),
        valid_lc = new Array(2 * n - 1).fill(1),
        valid_rc = new Array(2 * n - 1).fill(1);
    let res = [];

    const ans = Array.from({
        length: n
    }, () => ('.'.repeat(n)));

    // 更改该格对应行 列 左斜向 右斜向状态
    const setValid = (row, col, isValid) => {
        valid_row[row] = isValid;
        valid_col[col] = isValid;
        valid_rc[row - col + n - 1] = isValid;
        valid_lc[row + col] = isValid;
    }

    // 替换字符
    const replaceStr = (str, index, char) => {
        const strAry = str.split('');
        strAry[index] = char;
        return strAry.join('');
    }

    const backTracking = (row) => {
        if (row === n) {
            res.push(ans.slice());
            return;
        }

        for (let i = 0; i < n; i++) {
            if (valid_row[row] && valid_col[i] && valid_rc[row - i + n - 1] && valid_lc[row + i]) {
                setValid(row, i, 0);
                ans[row] = replaceStr(ans[row], i, 'Q');
                backTracking(row + 1);
                // 回溯
                ans[row] = replaceStr(ans[row], i, '.');
                setValid(row, i, 1);
            }
        }
    }

    backTracking(0);
    return res;

};
// @lc code=end

// let n = 4;
// solveNQueens(n);