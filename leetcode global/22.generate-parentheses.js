/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const generate = (left, right) => {
        if (left < 0 || right < 0) return;
        if (left === 0 && right === 1) return [")"];

        if (left >= right) {
            return generate(left - 1, right).map((str) => "(" + str);
        } else if (left > 0) {
            return [generate(left - 1, right).map((str) => "(" + str), generate(left, right - 1).map((str) => ")" + str)].flat();
        } else {
            return generate(left, right - 1).map((str) => ")" + str);
        }
    }

    return generate(n, n);
};
// @lc code=end