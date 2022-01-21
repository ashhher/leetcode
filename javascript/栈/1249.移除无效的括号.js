/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    /* ---------------- 栈 ---------------- */
    const len = s.length;
    let res = '';
    let left = [],
        right = [];
    for (let i = 0; i < len; i++) {
        if (s[i] === '(')
            left.push(i);
        if (s[i] === ')' && left.pop() === undefined)
            right.push(i);
    }
    for (let i = 0; i < len; i++) {
        if (left.indexOf(i) != -1 || right.indexOf(i) != -1) continue;
        res += s[i];
    }
    return res;
};
// @lc code=end

// console.log(minRemoveToMakeValid("())()((("));