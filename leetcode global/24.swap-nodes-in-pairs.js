/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    const dummy = new ListNode(-1, head);
    let first = dummy,
        second = head;

    while (second !== null && second.next !== null) {
        first.next = second.next;
        second.next = second.next.next;
        first.next.next = second;

        first = second;
        second = second.next;

    }

    return dummy.next;
};
// @lc code=end