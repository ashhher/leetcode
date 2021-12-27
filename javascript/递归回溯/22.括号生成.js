/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    /* -------------- DFS回溯 ------------ */
    let res = [];

    const backTracking = (nl, nr, comb) => {
        if (nl > n || nr > n)
            return;
        if (comb.length === n * 2) {
            res.push(comb);
            return;
        }

        comb = comb + '(';
        // 回溯
        backTracking(nl + 1, nr, comb);
        comb = comb.slice(0, comb.length - 1);

        // 当前右括号的数量只能小于等于左括号
        if (nl > nr) {
            comb = comb + ')';
            回溯
            backTracking(nl, nr + 1, comb);
            comb = comb.slice(0, comb.length - 1);
        }
    }

    backTracking(0, 0, '');
    return res;
};
// @lc code=end

// let n = 3;
// generateParenthesis(n);