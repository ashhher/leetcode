/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    const str_length = s.length;

    /* -------------- O(2^n * n) - DFS ------------ */
    let res = [];

    permutation(0, "");
    return res;

    function permutation(pos, pre_str) {
        if (pos === str_length) {
            res.push(pre_str);
            return;
        }

        let cur_str = s[pos];

        if (isNaN(Number(cur_str))) {
            permutation(pos + 1, pre_str + cur_str.toLowerCase());
            permutation(pos + 1, pre_str + cur_str.toUpperCase());
        } else {
            permutation(pos + 1, pre_str + cur_str);
        }
    }

    /* ============== O(2^n * n) - BFS ============ */
    // let res = [];
    // res.push("");

    // for (let i = 0; i < str_length; i++) {
    //     let cur_str = s[i];
    //     if (isNaN(Number(cur_str))) {
    //         // 若当前字符串为字母 则复制已有数组
    //         res.push(...res);
    //         for (let j = 0; j < res.length; j++) {
    //             if (j < res.length / 2)
    //                 // 对前半部分末尾添加小写字符
    //                 res[j] += cur_str.toLowerCase();
    //             else
    //                 // 对后半部分末尾添加大写字符
    //                 res[j] += cur_str.toUpperCase();
    //         }
    //     } else {
    //         // 若为数字 则直接在所有元素后添加该数字
    //         for (let j = 0; j < res.length; j++)
    //             res[j] += cur_str;
    //     }
    // }

    // return res.sort().reverse();
};
// @lc code=end

// let S = "a1b2";
// console.log(letterCasePermutation(S));