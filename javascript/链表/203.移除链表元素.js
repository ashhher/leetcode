/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    /* ---------------- 迭代 ---------------- */
    // if (!head) return head;
    // let res = head;
    // while (head.next != null) {
    //     if (head.next.val === val)
    //         head.next = head.next.next;
    //     else
    //         head = head.next;
    // }
    // return res.val === val ? res.next : res;

    /* ============== 递归 ============== */
    if (head === null) {
        return head;
    }
    head.next = removeElements(head.next, val);
    return head.val === val ? head.next : head;

};
// @lc code=end