/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
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
    /* ---------------- 队列 ---------------- */
    let pingList = this.pingList;
    for (let i = 0; i < pingList.length; i++) {
        if (pingList[i] < t - 3000) {
            i--;
            pingList.shift();
        } else
            break;
    }
    pingList.push(t);
    return pingList.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end
// var recentCounter = new RecentCounter();
// console.log(recentCounter.ping(642));
// console.log(recentCounter.ping(1849));
// console.log(recentCounter.ping(4921));
// console.log(recentCounter.ping(5936));
// console.log(recentCounter.ping(5957));