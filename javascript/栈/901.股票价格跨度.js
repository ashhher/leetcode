/*
 * @lc app=leetcode.cn id=901 lang=javascript
 *
 * [901] 股票价格跨度
 */

// @lc code=start

/* ---------------- 栈 ---------------- */
// var StockSpanner = function () {
//     this.price = []; // 股价
// };

// /** 
//  * @param {number} price
//  * @return {number}
//  */
// StockSpanner.prototype.next = function (price) {
//     let stack = this.price.slice(),
//         count = 1;
//     while (stack.length && stack.pop() <= price) count++;
//     this.price.push(price);
//     return count;
// };

/* ============== 跨度法 ============== */
var StockSpanner = function () {
    this.price = []; // 股价
    this.spanner = []; // 跨度值
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    this.price.push(price);

    if (this.spanner.length === 0) {
        this.spanner.push(1);
        return 1;
    }

    var count = 1,
        index = this.price.length - 2;
    // 循环向前，直到遇见比新插入的值更大的值
    while ((price >= this.price[index]) && (index >= 0)) {
        count += this.spanner[index]; // 累加跨度值
        index -= this.spanner[index]; // 下标按跨度值跳跃
    }
    this.spanner.push(count);

    return count;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end