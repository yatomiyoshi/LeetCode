/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  const headArray = [head.val];

  while (head.next) {
    head = head.next;
    headArray.push(head.val);
  }

  const valueString = headArray.join("");

  const reversedArray = headArray.reverse();
  const reversedString = reversedArray.join("");

  return valueString === reversedString;
};
