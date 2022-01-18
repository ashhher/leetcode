/*
 * @lc app=leetcode.cn id=921 lang=javascript
 *
 * [921] 使括号有效的最少添加
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    /* --------------- 栈 --------------- */
    // let stack = [];
    // for (let c of s) {
    //     if (c === ')' && stack[stack.length - 1] === '(')
    //         stack.pop();
    //     else
    //         stack.push(c);
    // }
    // return stack.length;

    // /* ============== 计数 ============== */
    // let l = r = 0;
    // for (const c of s) {
    //     if (c === '(') l++;
    //     else if (l) l--;
    //     else r++;
    // }
    // return l + r;

    /* ============== 正则 ============== */
    if (s.length) {
        return deleRepeat(s);
    } else {
        return 0;
    }

    function deleRepeat(s) {
        while (s.length) {
            let temp = s;
            s = s.replace('()', '');
            if (s === temp) {
                return s.length;
            }
        }
        return 0;
    }
};
// @lc code=end

// console.log(minAddToMakeValid("()))(("));