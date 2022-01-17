/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    /* --------------- 周期 --------------- */
    // let len = s.length,
    //     len_child = 1,
    //     str_child = "",
    //     flag = true;
    // for (let i = len; i >= 2; i--) {
    //     if (len % i != 0) continue;
    //     flag = true;
    //     len_child = len / i;
    //     str_child = s.slice(0, len_child);
    //     for (let start = len_child; start <= len - len_child; start += len_child) {
    //         if (s.slice(start, start + len_child) !== str_child) {
    //             flag = false;
    //             break;
    //         }
    //     }
    //     if (flag) return true;
    // }
    // return false;

    /* ============= 包含自身 ============= */
    let s1 = (s + s).slice(1, -1);
    return s1.indexOf(s) != -1;
};
// @lc code=end
// console.log(repeatedSubstringPattern("abcabcabd"));
