/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    /* ---------- O(n^2) - 暴力 ---------- */
    // let max_area = 0,
    //     temp_area = 0,
    //     temp_height = 0;

    // for (let i = 0; i < height.length - 1; i++) {
    //     for (let j = i + 1; j < height.length; j++) {
    //         temp_height = Math.min(height[i], height[j]);
    //         temp_area = temp_height * (j - i);
    //         max_area = Math.max(max_area, temp_area);
    //     }
    // }

    // return max_area;

    /* =========== O(n) - 双指针 ========= */
    // 从两端开始 若每次向内挪动长板 面积一定减小
    // 若每次向内挪动短板 面积可能增大
    // 所以每次挪动短板指针 最后两指针相遇时返回记录的最大值
    let max_area = 0,
        temp_area = 0,
        temp_height = 0,
        i = 0,
        j = height.length - 1;

    while (i != j) {
        temp_height = Math.min(height[i], height[j]);
        temp_area = temp_height * (j - i);
        max_area = Math.max(max_area, temp_area);

        if(height[i]<height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return max_area;
};
// @lc code=end