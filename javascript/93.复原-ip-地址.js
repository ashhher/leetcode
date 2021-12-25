/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    /* -------------- DFS回溯 + 剪枝 ------------ */
    const str_arr = s.split(''),
        len = str_arr.length;
    const N = 4;
    let res = [];

    const backTracking = (arr, pos) => {
        if (arr.length > N) return;
        // 满足条件 加入到结果集
        if (pos === len) {
            if (arr.length < N) return;
            res.push(arr.join('.'));
            return;
        }

        let cur = '';
        for (let i = pos; i < len; i++) {
            cur += str_arr[i];
            if (parseInt(cur) <= 255) {
                arr.push(cur);
                backTracking(arr, i + 1);
                // 回溯
                arr.pop();
                if (cur === '0') break;
            } else {
                break;
            }
        }
    }

    backTracking([], 0);
    return res;
};
// @lc code=end

// let s = "101023"; // ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
// restoreIpAddresses(s);