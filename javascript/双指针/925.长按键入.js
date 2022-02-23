/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    /* ---------------- 双指针 ---------------- */
    let n = 0,
        t = 0;
    while (n < name.length) {
        if (name[n] === typed[t]) {
            if (name[n] != name[n + 1] && typed[t] === typed[t + 1]) {
                t++;
            } else {
                n++;
                t++;
            }
        } else {
            return false;
        }
    }

    while (t < typed.length) {
        if (typed[t] != typed[t - 1]) return false;
    }

    return true;
};
// @lc code=end

// console.log(isLongPressedName("alex", "aaleexae"));