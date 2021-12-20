/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {

    /* -------------- 迭代 ------------ */
    // let res = [],
    //     count = 0;

    // nums = nums.sort();
    // for (let i = 0; i < nums.length; i++) {
    //     let start = 0,
    //         cur_length = res.length;

    //     if (i > 0 && nums[i] === nums[i - 1]) {
    //         start = parseInt(cur_length - count);
    //         count = 0;
    //     } else {
    //         res.push([nums[i]]);
    //         count = 1;
    //     }

    //     if (i === 0)
    //         continue;
    //     for (let j = start; j < cur_length; j++) {
    //         res.push(res[j].concat(nums[i]));
    //         count++;
    //     }
    // }
    // res.unshift([]);
    // return res;

    /* -------------- 回溯去重 ------------ */
    let result = [];
    let path = [];
    nums = nums.sort();
    
    function backtracing(startIndex) {
        // 对path深拷贝插入到result
        result.push(path.slice(0));
        if(startIndex > nums.length - 1) {
            return;
        }
        for(let i = startIndex; i < nums.length; i++) {
            if(i > startIndex && nums[i] === nums[i - 1]) {
                continue;
            }
            path.push(nums[i]);
            backtracing(i + 1);
            path.pop();
        }
    }
    /**************************/
    backtracing(0);
    return result;

};
// @lc code=end

console.log(subsetsWithDup([5,5,5,5,5]));