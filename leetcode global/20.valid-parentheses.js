/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];

    for (l of s) {
        if (l === "(" || l === "[" || l === "{") {
            stack.push(l)
        } else {
            const cur = stack.pop();
            if ((cur === "(" && l === ")") || (cur === "[" && l === "]") || (cur === "{" && l === "}")) continue
            else return false;
        }
    }

    return stack.length === 0;

    /* ============= Map ============= */
    // var map = {
    //     "(": ")",
    //     "[": "]",
    //     "{": "}"
    // }
    // var leftArr = [];
    // for (var ch of s) {
    //     if (ch in map) leftArr.push(ch); 
    //     else { 
    //         if (ch != map[leftArr.pop()]) return false;
    //     }
    // }
    // return !leftArr.length;
};
// @lc code=end