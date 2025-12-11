/*
Problem: Reverse Linked List

Given the head of a singly linked list, reverse the list and return the new head.
You must reverse the list in-place using only constant extra space.

Example:
Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
Output: 5 -> 4 -> 3 -> 2 -> 1 -> null

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
*/

function reverseList(head) {
  // Approach: Use three pointers to reverse the links
  // prev: points to the previous node (initially null)
  // current: points to the current node being processed
  // next: temporarily stores the next node to avoid losing it
  
  // Your code here
}