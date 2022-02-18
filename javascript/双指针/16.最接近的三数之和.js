/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    /* ============== 双指针 ============== */
    // 先将数组从小到大排序， 便于微调 sum 的大小。
    // 从左到右遍历， 先固定一个数， 剩下的部分， 用头尾双指针扫描
    // 如果 sum 大于目标值， 就右指针左移， 使 sum 变小， 否则左指针右移， sum 变大。
    // 再看 abs(sum - target) 是否比之前更小了， 如果是， 将当前 sum 更新给 res
    // 遍历结束， 就有了最接近目标值的 sum

    nums.sort((a, b) => a - b);
    let res = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length; i++) {
        let l = i + 1,
            r = nums.length - 1;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (Math.abs(sum - target) < Math.abs(res - target))
                res = sum;
            if (sum > target)
                r--;
            else
                l++;
        }
    }
    return res;
};
// @lc code=end