/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
    /* ---------------- 递归 ---------------- */
    // if (head == null || head.next == null) return head;
    // let dummy = new ListNode(0);
    // const backTracking = (node) => {
    //     if (node.next == null) {
    //         dummy = node;
    //         return node;
    //     }
    //     backTracking(node.next).next = node;
    //     return node;
    // }
    // backTracking(head).next = null;
    // return dummy;

    /* ============== 递归简易 ============== */
    // if (head == null || head.next == null) return head;
    // const p = reverseList(head.next);
    // head.next.next = head;
    // head.next = null;
    // return p;

    /* ---------------- 迭代 ---------------- */
    // if (head == null || head.next == null) return head;
    // let stack = [];
    // while (head != null) {
    //     stack.push(head);
    //     head = head.next;
    // }
    // let dummy = stack.pop();
    // head = dummy;
    // while (stack.length > 0) {
    //     head.next = stack.pop();
    //     head = head.next;
    // }
    // head.next = null;
    // return dummy;

    /* ============== 迭代简易 ============== */
    let prev = null, curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};
// @lc code=end