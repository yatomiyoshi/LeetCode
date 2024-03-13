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
const deleteDuplicates = function(head) {
    
  current = head;
  duplicateRemovedList = current;
  while(current !== null && current.next !== null){
      next = current.next;
      while(next.val === current.val){
          current.next = next.next;
          next = next.next;
          if(next === null) break;
      }
      current = next;
  }

  return duplicateRemovedList;
};