class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }

  l2.next = mergeTwoLists(l1, l2.next);
  return l2;
};

export default mergeTwoLists;
