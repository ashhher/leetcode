/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    /* -------------- DFS回溯 ------------ */
    const str_arr = s.split(''),
        len = str_arr.length;
    let res = [];

    // 判断是否是回文
    const isPalin = (str) => {
        if (str.length === 1) return true;
        for (let i = 0; i < Math.round(str.length / 2); i++) {
            if (str[i] !== str[str.length - i - 1])
                return false;
        }
        return true;
    }

    const backTracking = (arr, pos) => {
        // 满足条件 加入到结果集
        if (pos === len) {
            res.push(arr.slice());
            return;
        }

        let cur = '';
        for (let i = pos; i < len; i++) {
            cur += str_arr[i];
            if (isPalin(cur)) {
                arr.push(cur);
                backTracking(arr, i + 1);
                // 回溯
                arr.pop();
            }
        }
    }

    backTracking([], 0);
    return res;
};
// @lc code=end

// let s = "aabcba";
// partition(s);