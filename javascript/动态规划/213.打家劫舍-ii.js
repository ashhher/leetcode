/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    /* ================ DP ================ */
    // 如果偷了第一间房 则不能偷窃最后一间房 偷窃范围: [0,length-2] 
    // 如果偷了最后一间房 则不能偷窃第一间房 偷窃范围: [1,length-1] 
    // 最后比较二者大小

    const robRange = (nums, start, end) => {
        let first = nums[start],
            second = Math.max(nums[start], nums[start + 1]);
        for (let i = start + 2; i <= end; i++) {
            const temp = second;
            second = Math.max(first + nums[i], second);
            first = temp;
        }
        return second;
    }

    const length = nums.length;
    if (length === 1) {
        return nums[0];
    } else if (length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    return Math.max(robRange(nums, 0, length - 2), robRange(nums, 1, length - 1));
};



// @lc code=end