/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const waitDays = new Array(temperatures.length).fill(0);
    const indexStack = [];
    for (curIndex in temperatures) {
        while (temperatures[indexStack.slice(-1)] < temperatures[curIndex]) {
            let index = indexStack.pop();
            waitDays[index] = curIndex - index;
        }

        indexStack.push(curIndex);
    }

    for (i of indexStack) waitDays[i] = 0;

    return waitDays;
};
// @lc code=end

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);