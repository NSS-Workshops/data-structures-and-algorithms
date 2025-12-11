/*
Problem: Find Middle Node of Linked List

Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.
*/

function findMiddleNode(head) {
  // Handle edge case: empty list
  if (!head) {
    return null;
  }
  
  // Initialize two pointers
  let slow = head;  // Tortoise: moves 1 step at a time
  let fast = head;  // Hare: moves 2 steps at a time
  
  // Move pointers until fast reaches the end
  // When fast reaches the end, slow will be at the middle
  while (fast !== null && fast.next !== null) {
    slow = slow.next;        // Move slow pointer 1 step
    fast = fast.next.next;   // Move fast pointer 2 steps
  }
  
  // slow is now pointing to the middle node
  return slow;
  
  // Time Complexity: O(n) - we traverse the list once
  // Space Complexity: O(1) - only using constant extra space for pointers
  
  // For odd length lists: slow points to the exact middle
  // For even length lists: slow points to the second middle node
}