/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    /* ---------------- 数组判断 ---------------- */
    // let dic = [];
    // while (head) {
    //     if (dic.indexOf(head) != -1) return head;
    //     dic.push(head);
    //     head = head.next;
    // }
    // return null;

    /* ============== 哈希表判断 ============== */
    // const visited = new Set();
    // while (head) {
    //     if (visited.has(head)) return head;
    //     visited.add(head);
    //     head = head.next;
    // }
    // return null;

    /* ============== 快慢指针 ============== */
    // 太抽象了这个办法 不如用哈希表
    if (!head) return head;
    let slow = head,
        fast = head;
    while (fast) {
        slow = slow.next;
        if (fast.next !== null) {
            fast = fast.next.next;
        } else {
            return null;
        }
        if (fast === slow) {
            let ptr = head;
            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }
            return ptr;
        }
    }
    return null;
};
// @lc code=end