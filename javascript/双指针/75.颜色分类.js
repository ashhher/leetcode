/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    /* ---------------- 计数 ---------------- */
    // let n0 = 0,
    //     n1 = 0,
    //     n2 = 0;
    // for (let n of nums) {
    //     if (n === 0) n0++;
    //     else if (n === 1) n1++;
    //     else n2++;
    // }
    // for (let i = 0; i < nums.length; i++) {
    //     if (i < n0) nums[i] = 0;
    //     else if (i < n0 + n1) nums[i] = 1;
    //     else nums[i] = 2;
    // }
    // return nums;

    /* ============== 操作数组 ============== */
    // 0，1，2 排序 一次遍历
    // 如果是0，则移动到表头
    // 如果是2，则移动到表尾，不用考虑1
    
    // let len = nums.length;
    // for (let i = 0; i < len; i++) {
    //     if (nums[i] === 0) {
    //         nums.splice(i, 1);
    //         nums.unshift(0);
    //     } else if (nums[i] === 2) {
    //         nums.splice(i, 1);
    //         nums.push(2);
    //         i--;
    //         len--;
    //     }
    // }
    // return nums;

    /* ============== 三指针 ============== */
    // left为数字0的右开边界，right为数字2的左开边界
    let left = 0,
        right = nums.length - 1,
        i = 0;
    while (i <= right) {
        if (nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            i++;
            left++;
        } else if (nums[i] === 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
        } else {
            i++;
        }
    }
    return nums;

};
// @lc code=end