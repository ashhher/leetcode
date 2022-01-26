/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    /* ---------------- 递归 ---------------- */
    // 改自 206.反转链表-递归简易
    // if (right === 1) {
    //     return head;
    // }
    // if (left <= 1) {
    //     const node = reverseBetween(head.next, left - 1, right - 1);
    //     const temp = head.next.next;
    //     head.next.next = head;
    //     head.next = temp;
    //     return node;
    // } else {
    //     head.next = reverseBetween(head.next, left - 1, right - 1)
    //     return head;
    // }

    /* ============== 迭代 ============== */
    const dummy_node = new ListNode(-1);
    dummy_node.next = head;
    let pre = dummy_node;
    for (let i = 0; i < left - 1; ++i) {
        pre = pre.next;
    }

    let cur = pre.next;
    for (let i = 0; i < right - left; ++i) {
        const next = cur.next;
        cur.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    return dummy_node.next;
};
// @lc code=end