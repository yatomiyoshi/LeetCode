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
const middleNode = function (head) {
  let listLength = 1;
  let node = head;
  while (node.next) {
    listLength++;
    node = node.next;
  }

  node = head;
  listLength = listLength % 2 === 0 ? ++listLength : listLength;
  const middle = Math.round(listLength / 2);
  for (let num = 1; num < middle; num++) {
    node = node.next;
  }
  return node;
};
