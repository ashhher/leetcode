/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    /* ---------------- 双指针 ---------------- */
    // let left = 0,
    //     right = height.length - 1;
    // let lmax = 0,
    //     rmax = 0,
    //     res = 0;

    // while (height[left] === 0) left++;
    // while (height[right] === 0) right--;

    // // 总体形状为凸字形 每个坐标对应雨水 = (最大围挡高度-当前坐标柱子高度)
    // while (left <= right) {
    //     if (height[left] > lmax) lmax = height[left];
    //     if (height[right] > rmax) rmax = height[right];
    //     if (lmax < rmax) {
    //         res += (lmax - height[left]);
    //         left++;
    //     } else {
    //         res += (rmax - height[right]);
    //         right--;
    //     }
    // }
    // return res;

    /* ============== 动态规划 ============== */
    // 分别从左和从右遍历数组 记录每个坐标的左边最大高度和右边最大高度
    // 每个坐标积水量 = min(左边最大高度, 右边最大高度) - 坐标柱高度
    
    const n = height.length;
    if (n == 0) {
        return 0;
    }

    const leftMax = new Array(n).fill(0);
    leftMax[0] = height[0];
    for (let i = 1; i < n; ++i) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    const rightMax = new Array(n).fill(0);
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; --i) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    let ans = 0;
    for (let i = 0; i < n; ++i) {
        ans += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return ans;
};
// @lc code=end