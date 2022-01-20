/*
 * @lc app=leetcode.cn id=907 lang=javascript
 *
 * [907] 子数组的最小值之和
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function (A) {
    /* ============== 单调栈 ============== */
    const MOD = 1e9 + 7,
        len = A.length;
    let stack = [],
        prev = new Array(len).fill(-1),
        next = new Array(len).fill(len);

    // 从左到右的单调栈
    for (let i = 0; i < len; i++) {
        //这里取大于等于 后面的就只能取大于 否则会重复计算相等的值
        while (stack.length !== 0 && A[stack[stack.length - 1]] >= A[i]) stack.pop();
        if (stack.length) prev[i] = stack[stack.length - 1];
        stack.push(i);
    }
    stack = [];
    // 从右到左的单调栈
    for (let i = len - 1; i >= 0; i--) {
        while (stack.length !== 0 && A[stack[stack.length - 1]] > A[i]) stack.pop();
        if (stack.length) next[i] = stack[stack.length - 1];
        stack.push(i);
    }

    let sum = 0;
    for (let i = 0; i < len; i++) {
        //以 A[i] 作为最小数能构成的数组
        sum += (i - prev[i]) * (next[i] - i) * A[i]; 
        sum %= MOD;
    }
    return sum;
};
// @lc code=end