/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let sumPointer = new ListNode(-1),
        sumStart = sumPointer;

    let carry = 0;

    while (l1 || l2) {
        const value = (l1 && l1.val) + (l2 && l2.val) + carry;
        sumPointer.next = new ListNode(value % 10);
        carry = Math.floor(value / 10);

        sumPointer = sumPointer.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    if (carry) sumPointer.next = new ListNode(carry);

    return sumStart.next;
};
// @lc code=end