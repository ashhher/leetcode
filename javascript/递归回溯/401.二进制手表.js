/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
    const res = [];

    // /* ================ 暴力 ============== */
    // 对于每个时间组合 都计算出亮灯数量
    // 若与目标数量相等 则加入到result集合中
    // for (let hour = 0; hour < 12; hour++) {
    //     for (let minute = 0; minute < 60; minute++) {
    //         let h_count = hour.toString(2).split('0').join('').length;
    //         let m_count = minute.toString(2).split('0').join('').length;;
    //         if ((h_count + m_count) === turnedOn)
    //             res.push(`${hour}:${minute < 10 ? '0' + minute : minute}`);
    //     }
    // }
    // return res;

    /* ============ DFS + 位运算 ========== */
    function dfs(time, n, index) {
        const hour = time >> 6,
            minute = time & 0b111111;
        if (hour > 11 || minute > 59) return;
        if (n === 0) {
            res.push(`${hour}:${minute < 10 ? "0" + minute : minute}`);
            return;
        }
        const end = 10 - n;
        while (index <= end) {
            dfs(time | (1 << index), n - 1, ++index);
        }
    }
    /*************************/
    dfs(0, turnedOn, 0);
    return res;
};
// @lc code=end