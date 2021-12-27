/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let res = [];
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    /* ============ DFS ========== */
    const dfs = (tk, tn, tr, start) => {
        if (tk === 0 || tr.length === 9) {
            if (tn === 0) res.push(tr.slice(0).sort());
            return tn; // 若小于0 则对于该层来说更大的分支也可以减去
        }

        for (let i = start; i < nums.length; i++) {
            let cur = nums[i];
            tr.push(cur);
            // 剪枝
            if (dfs(tk - 1, tn - cur, tr, i + 1) < 0) {
                tr.pop();
                break;
            }
            // 回溯
            tr.pop();
        }
    }

    dfs(k, n, [], 0);
    return res;
};
// @lc code=end

console.log(combinationSum3(3, 9));