/*
Problem: Reverse Linked List

Given the head of a singly linked list, reverse the list and return the new head.
You must reverse the list in-place using only constant extra space.
*/

function reverseList(head) {
  // Handle edge case: empty list or single node
  if (!head || !head.next) {
    return head;
  }
  
  // Initialize three pointers
  let prev = null;      // Previous node (will become the next node after reversal)
  let current = head;   // Current node being processed
  let next = null;      // Temporary storage for the next node
  
  // Traverse the list and reverse the links
  while (current !== null) {
    // Store the next node before we lose the reference
    next = current.next;
    
    // Reverse the link: make current point to previous
    current.next = prev;
    
    // Move pointers forward for next iteration
    prev = current;
    current = next;
  }
  
  // prev is now pointing to the new head of the reversed list
  return prev;
  
  // Time Complexity: O(n) - we visit each node exactly once
  // Space Complexity: O(1) - only using constant extra space for pointers
}