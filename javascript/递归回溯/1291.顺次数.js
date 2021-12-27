/*
 * @lc app=leetcode.cn id=1291 lang=javascript
 *
 * [1291] 顺次数
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    /* -------------- O(logn) ------------ */
    // let numbers = [];
    // let x = parseInt(low.toString().substring(0,1)); // 最高位
    // let n = low.toString().length; // 位数
    // let temp_num = 0;
    // let flag = true;

    // do {
    //     while (x + n <= 10) {
    //         temp_num = x;
    //         for (let i = 1; i < n; i++) {
    //             temp_num = (temp_num * 10 + x + i);
    //         }
    //         if(temp_num <= high) {
    //             numbers.push(temp_num);
    //         } else {
    //             flag = false;
    //             break;
    //         }
    //         x++;
    //     }
    //     x = 1;
    //     n++; // 增加一位
    // } while (Math.pow(10,n-1) < high && flag)

    // if(numbers[0]<low) numbers.shift(); // 判断第一个

    // return numbers;

    /* ============ O(1) - 枚举1 ========== */
    // let numbers = [];
    // for (let i = 1; i < 10; i++) {
    //     let num = i;
    //     for (let j = i + 1; j < 10; j++) {
    //         num = num * 10 + j;
    //         if (num >= low && num <= high) {
    //             numbers.push(num);
    //         }
    //     }
    // }
    // return numbers.sort(function (a, b) {
    //     return a - b;
    // });

    /* ============ O(1) - 枚举2 ========== */
    let nums = [12, 23, 34, 45, 56, 67, 78, 89,
        123, 234, 345, 456, 567, 678, 789,
        1234, 2345, 3456, 4567, 5678, 6789,
        12345, 23456, 34567, 45678, 56789,
        123456, 234567, 345678, 456789,
        1234567, 2345678, 3456789,
        12345678, 23456789,
        123456789
    ];
    let numbers = [];

    for (let key in nums) {
        // console.log(item);
        if (nums[key] >= low && nums[key] <= high) {
            numbers.push(nums[key]);
        }
    }

    return numbers;
};
// @lc code=end