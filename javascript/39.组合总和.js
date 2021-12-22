/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    /* -------------- DFS回溯 + 剪枝 ------------ */
    // 此处如果只用 sort() 会使 11 12... 排在 2 3 4... 前面
    candidates.sort(function (a, b) {
        return a - b
    });
    const len = candidates.length;
    let res = [];

    const dfs = (arr, start) => {
        // 结束/跳出
        let sum_arr = sum(arr);
        if (sum_arr >= target) {
            if (sum_arr === target)
                res.push(arr.slice());
            return sum_arr - target;
        }

        for (let i = start; i < len; i++) {
            arr.push(candidates[i]);
            let minus = dfs(arr, i);
            // 回溯
            arr.pop();
            // 剪枝
            if (minus > 0) return 0;
        }
    }

    // 计算数组内元素和
    const sum = arr => {
        if (arr.length === 0) return 0;
        return arr.reduce(function (prev, next, index, arr) {
            return prev + next;
        });
    }

    dfs([], 0);
    return res;
};
// @lc code=end
// let candidates = [3, 12, 9, 11, 6, 7, 8, 5, 4],
//     target = 15;
// console.log(combinationSum(candidates, target));