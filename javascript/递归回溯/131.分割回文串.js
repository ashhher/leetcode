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
    // const str_arr = s.split(''),
    //     len = str_arr.length;
    // let res = [];

    // // 判断是否是回文
    // const isPalin = (str) => {
    //     if (str.length === 1) return true;
    //     for (let i = 0; i < Math.round(str.length / 2); i++) {
    //         if (str[i] !== str[str.length - i - 1])
    //             return false;
    //     }
    //     return true;
    // }

    // const backTracking = (arr, pos) => {
    //     // 满足条件 加入到结果集
    //     if (pos === len) {
    //         res.push(arr.slice());
    //         return;
    //     }

    //     let cur = '';
    //     for (let i = pos; i < len; i++) {
    //         cur += str_arr[i];
    //         if (isPalin(cur)) {
    //             arr.push(cur);
    //             backTracking(arr, i + 1);
    //             // 回溯
    //             arr.pop();
    //         }
    //     }
    // }

    // backTracking([], 0);
    // return res;

    /* ============ 回溯 + 动规预处理 ========== */
    // 当 s = \texttt{aaba}s=aaba 时，对于前 22 个字符 \texttt{aa}aa，我们有 22 种分割方法 [\texttt{aa}][aa] 和 [\texttt{a}, \texttt{a}][a,a]，当我们每一次搜索到字符串的第 i=2i=2 个字符 \texttt{b}b 时，都需要对于每个 s[i..j]s[i..j] 使用双指针判断其是否为回文串，这就产生了重复计算

    const dfs = (i) => {
        if (i === len) {
            res.push(ans.slice());
            return;
        }
        for (let j = i; j < len; ++j) {
            if (f[i][j]) {
                ans.push(s.slice(i, j + 1));
                dfs(j + 1);
                ans.pop();
            }
        }
    }

    const len = s.length;
    const f = new Array(len).fill(0).map(() => new Array(len).fill(true));
    let res = [],
        ans = [];

    // 预处理
    for (let i = len - 1; i >= 0; --i) {
        for (let j = i + 1; j < len; ++j) {
            f[i][j] = (s[i] === s[j]) && f[i + 1][j - 1];
        }
    }
    dfs(0);
    return res;

};
// @lc code=end

// let s = "aabcba";
// partition(s);