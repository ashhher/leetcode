/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    /* -------------- DFS回溯 + 剪枝 ------------ */
    candidates.sort((a, b) => a - b);
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
        if (start >= len) return 0;

        for (let i = 0; i < len - start; i++) {
            let index = start + i
            // 剪枝1：剪去重复元素
            if (i > 0 && candidates[index] === candidates[index - 1]) continue;
            // DFS
            arr.push(candidates[index]);
            let minus = dfs(arr, index + 1);
            // 回溯
            arr.pop();
            // 剪枝2：剪去使结果大于target的元素
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
// let candidates = [10, 1, 2, 7, 6, 1, 5],
//     target = 8;
// console.log(combinationSum2(candidates, target));