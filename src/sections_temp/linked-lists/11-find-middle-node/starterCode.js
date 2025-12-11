/*
Problem: Find Middle Node of Linked List

Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Use the two-pointer technique (tortoise and hare) to solve this in one pass.

Example 1:
Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
Output: Node with value 3 (middle node)

Example 2:
Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
Output: Node with value 4 (second middle node)

Node structure:
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would you find the node at 1/3 position?
*/

function findMiddleNode(head) {
  // Approach: Use two pointers (tortoise and hare)
  // Slow pointer moves 1 step at a time
  // Fast pointer moves 2 steps at a time
  // When fast reaches the end, slow will be at the middle
  
  // Your code here
}