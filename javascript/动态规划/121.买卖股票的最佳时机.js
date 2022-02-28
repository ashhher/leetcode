/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    /* ---------------- DP ---------------- */
    let min_price = prices[0],
        dp = [0];
    for (let i = 1; i <= prices.length; i++) {
        if (prices[i - 1] < min_price) min_price = prices[i - 1];
        dp[i] = Math.max(dp[i - 1], prices[i - 1] - min_price);
    }
    return dp.slice(-1);
};
// @lc code=end