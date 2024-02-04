/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let countNode = head,
        count = 0;
    while (countNode) {
        count++;
        countNode = countNode.next;
    }
    let dummy = new ListNode(-1, head),
        pointer = head,
        former = dummy,
        current = 1,
        num = count - n + 1;
    while (current < num) {
        pointer = pointer.next;
        former = former.next;
        current++;
    }
    former.next = pointer.next;
    return dummy.next;
};
// @lc code=end