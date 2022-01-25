/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    if (head.val === val) return head.next;
    const dummy = head;
    while (head.next.val !== val) {
        head = head.next;
    }
    head.next = head.next.next;
    return dummy;
};