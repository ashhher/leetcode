/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    /* --------------- 栈 --------------- */
    let stack = [];
    while (pushed.length) {
        stack.push(pushed.shift());
        while (stack[stack.length - 1] === popped[0] && stack.length !== 0) {
            stack.pop();
            popped.shift();
        }
    }
    return !stack.length;
};
// @lc code=end
// let pushed = [1,0],
//     popped = [1,0];
// console.log(validateStackSequences(pushed, popped));