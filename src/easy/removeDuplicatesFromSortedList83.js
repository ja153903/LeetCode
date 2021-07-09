class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  let current = head;

  while (current) {
    while (current.next && current.next.val == current.val) {
      current.next = current.next.next;
    }
    current = current.next;
  }

  return head;
}
