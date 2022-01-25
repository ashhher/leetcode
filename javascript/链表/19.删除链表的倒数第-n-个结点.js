/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
    /* ---------------- 递归 ---------------- */
    // const backTracking = (head) => {
    //     if (head == null) return head;
    //     head.next = backTracking(head.next);
    //     if (--n === 0)
    //         return head.next;
    //     else
    //         return head;
    // }
    // return backTracking(head);

    /* ============== 前后指针 ============== */
    const dummy = new ListNode(0, head)
    let forward = dummy,
        backward = dummy;
    while (n--) {
        forward = forward.next;
    }
    while (forward.next) {
        forward = forward.next;
        backward = backward.next;
    }
    backward.next = backward.next.next;
    return dummy.next;

};
// @lc code=end