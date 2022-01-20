/*
 * @lc app=leetcode.cn id=1190 lang=javascript
 *
 * [1190] 反转每对括号间的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    /* ---------------- 栈 O(n^2) ---------------- */
    // let stack = [];
    // for (const ch of s) {
    //     if (ch !== ')') {
    //         stack.push(ch);
    //     } else {
    //         let temp = '';
    //         while (stack[stack.length - 1] !== '(' && stack.length != 0)
    //             temp = stack.pop() + temp;
    //         temp = temp.split('').reverse().join('');
    //         stack.pop();
    //         stack.push(temp);
    //     }
    // }
    // return stack.join("");

    /* ============== 预处理括号 O(n) ============== */
    const len = s.length;
    const pair = new Array(len).fill(0);
    const stack = [];

    // 遍历字符串 记录左右括号位置
    for (let i = 0; i < len; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            const j = stack.pop();
            pair[i] = j; // 左括号位置记录对应右括号位置
            pair[j] = i; // 右括号位置记录对应左括号位置
        }
    }

    const sb = [];
    let index = 0,
        step = 1;
    while (index < len) {
        if (s[index] === '(' || s[index] === ')') {
            index = pair[index];
            step = -step;
        } else {
            sb.push(s[index]);
        }
        index += step;
    }
    return sb.join('');

};
// @lc code=end

// console.log(reverseParentheses("a(bcdefghijkl(mno)p)q"));