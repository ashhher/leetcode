/*
 * @lc app=leetcode id=933 lang=javascript
 *
 * [933] Number of Recent Calls
 */

// @lc code=start

var RecentCounter = function () {
    this.pingList = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    for (let i = 0; i < this.pingList.length; i++) {
        if (this.pingList[i] < (t - 3000)) {
            i--;
            this.pingList.pop();
        }
    }
    this.pingList.unshift(t);
    return (this.pingList.length);
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end