/*
 * @lc app=leetcode id=901 lang=javascript
 *
 * [901] Online Stock Span
 */

// @lc code=start

var StockSpanner = function () {
    this.history = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    this.history.push(price);

    for (let i = this.history.length - 1; i >= 0; i--) {
        if (this.history[i] > price) {
            return this.history.length - i - 1;
        }
    }
    return this.history[0] <= price ? this.history.length : 1;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end