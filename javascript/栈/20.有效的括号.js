/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    /* --------------- 字典+栈 --------------- */
    // if (s === null) return true;
    // let dic = {
    //     '(': [1, 1],
    //     ')': [1, -1],
    //     '{': [2, 1],
    //     '}': [2, -1],
    //     '[': [3, 1],
    //     ']': [3, -1]
    // }
    // let arr = s.split(''),
    //     queue = [];

    // while (arr.length) {
    //     let temp = arr.splice(0, 1)[0];
    //     if (dic[temp][1] === 1) {
    //         queue.push(temp);
    //     } else if (queue.length === 0 || dic[queue.pop()][0] !== dic[temp][0]) {
    //         return false;
    //     }
    // }
    // if (queue.length) return false;
    // return true;

    /* ============= 简洁 ============= */
    var map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    var leftArr = [];
    for (var ch of s) {
        if (ch in map) leftArr.push(ch); //为左括号时，顺序保存
        else { //为右括号时，与数组末位匹配
            if (ch != map[leftArr.pop()]) return false;
        }
    }
    return !leftArr.length; //防止全部为左括号

};
// @lc code=end
// console.log(isValid('))'));