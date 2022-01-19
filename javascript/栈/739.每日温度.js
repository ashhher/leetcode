/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    /* ---------------- 栈 ---------------- */
    // let stack = [],
    //     res = [],
    //     cur = 0,
    //     count = 0,
    //     flag = false;
    // while (temperatures.length) {
    //     cur = temperatures.pop();
    //     count = 0;
    //     flag = false;
    //     while (count < stack.length) {
    //         if (stack[stack.length - count - 1] > cur) {
    //             flag = true;
    //             count++;
    //             break;
    //         }
    //         count++;
    //     }
    //     res.push(!flag ? 0 : count);
    //     stack.push(cur);
    // }
    // return res.reverse();

    /* ---------------- 跳步 ---------------- */
    // if (temperatures.length === 0) return [];

    // const len = temperatures.length;
    // const steps = new Array(len).fill(0);

    // let index = len - 2,
    //     temp_step = 0;

    // while (index >= 0) {
    //     temp_step = 1;
    //     while (index + temp_step < len) {
    //         if (temperatures[index + temp_step] > temperatures[index]) {
    //             steps[index] = temp_step;
    //             break;
    //         }
    //         if (steps[index + temp_step] === 0) break;
    //         temp_step += steps[index + temp_step];
    //     }
    //     index--;
    // }
    // return steps;

    /* ============== 单调栈 ============== */
    // 栈记录的是温度在数组中的位置
    let { length } = temperatures;
    let res = new Array(length).fill(0);
    let stack = [];
    for(let i = 0; i < length; i++) {
        while(stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) { // 若当前温度大于栈顶index对应位置的温度
            let index = stack.pop();
            res[index] = i - index;
        }
        stack.push(i); //压入当前位置
    }
    return res;

};
// @lc code=end

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));