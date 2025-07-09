import { TestResult } from "../../utils/test_utils";

export const codeExcerciseOneChapter = {
  id: 'a719142c',
  title: 'Module 5 - Code Excercise 1',
  sectionId: 'linked-lists',
  previousChapterId: null,
  content: `
  Hi 👋,
You'll be guiding your partner through the coding problem on the right side of your screen. 

⚠️ **Please do not share this URL / problem before class.**  
Revealing the question early defeats the purpose of simulating a real-world interview, where candidates do not know the problem in advance. Let's give your partner the chance to experience the challenge authentically.

🧠 **Before class:**  
Take time to study the problem. During the session, you'll have 90 minutes in your breakout room to run a mock interview with your partner. Be sure to take turns acting as the interviewer and interviewee.

🗣️ **As the interviewer, your responsibilities are:**
- Send this URL to your partner (copy and past the whole url and slack it directly to you partner)
- Briefly introduce the problem
- Never give away the answer
- Take notes and provide feedback
- Fill out this [feedback form](https://forms.gle/sXK3tJaGNEk52jm4A)

🗣️ **As the interviewee, your responsibilities are:**
- Ask clarifying questions
- Follow the steps in the [solving guide](https://forms.gle/sXK3tJaGNEk52jm4A):
    Step 1: Clarify
    Step 2: Plan
    Step 3: Implement
    Step 4: Test
    Step 5: Optimize

🪞 **After the first interview:**  
Leave 10–15 minutes to reflect, share feedback, and then switch roles.

Best of luck, and enjoy the practice! 🚀

## Problem: Reverse Linked List

Given the head of a singly linked list, reverse the list and return the new head.

You must reverse the list in-place using only constant extra space.

### Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?`,
  exercise: {
    starterCode:`/*
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
- How would you do this recursively? What are the tradeoffs?
*/

function reverseList(head) {
  // Approach: Use three pointers to reverse the links
  // prev: points to the previous node (initially null)
  // current: points to the current node being processed
  // next: temporarily stores the next node to avoid losing it
  
  // Your code here
}`,
    solution:`/*
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
}`,
    tests:[
      {
        name: "Reverse basic linked list",
        test: (code) => {
          try {
            // Define ListNode class for testing
            class ListNode {
              constructor(val, next) {
                this.val = (val === undefined ? 0 : val);
                this.next = (next === undefined ? null : next);
              }
            }
            
            const reverseList = new Function(`
              class ListNode {
                constructor(val, next) {
                  this.val = (val === undefined ? 0 : val);
                  this.next = (next === undefined ? null : next);
                }
              }
              ${code}; 
              return reverseList;
            `)();
            
            // Create test list: 1 -> 2 -> 3 -> null
            const node3 = new ListNode(3);
            const node2 = new ListNode(2, node3);
            const node1 = new ListNode(1, node2);
            
            const result = reverseList(node1);
            
            // Check if reversed correctly: 3 -> 2 -> 1 -> null
            if (result.val === 3 && result.next.val === 2 && result.next.next.val === 1 && result.next.next.next === null) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected reversed list 3->2->1->null, but got different structure`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should reverse a basic linked list correctly."
      },
      {
        name: "Handle empty list",
        test: (code) => {
          try {
            // ListNode class defined in function scope for testing
            
            const reverseList = new Function(`
              class ListNode {
                constructor(val, next) {
                  this.val = (val === undefined ? 0 : val);
                  this.next = (next === undefined ? null : next);
                }
              }
              ${code}; 
              return reverseList;
            `)();
            
            const result = reverseList(null);
            
            if (result === null) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected null for empty list, got ${result}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle empty list correctly."
      },
      {
        name: "Handle single node",
        test: (code) => {
          try {
            class ListNode {
              constructor(val, next) {
                this.val = (val === undefined ? 0 : val);
                this.next = (next === undefined ? null : next);
              }
            }
            
            const reverseList = new Function(`
              class ListNode {
                constructor(val, next) {
                  this.val = (val === undefined ? 0 : val);
                  this.next = (next === undefined ? null : next);
                }
              }
              ${code}; 
              return reverseList;
            `)();
            
            const singleNode = new ListNode(42);
            const result = reverseList(singleNode);
            
            if (result.val === 42 && result.next === null) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected single node with value 42, got different result`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle single node correctly."
      },
      {
        name: "Reverse longer list",
        test: (code) => {
          try {
            class ListNode {
              constructor(val, next) {
                this.val = (val === undefined ? 0 : val);
                this.next = (next === undefined ? null : next);
              }
            }
            
            const reverseList = new Function(`
              class ListNode {
                constructor(val, next) {
                  this.val = (val === undefined ? 0 : val);
                  this.next = (next === undefined ? null : next);
                }
              }
              ${code}; 
              return reverseList;
            `)();
            
            // Create test list: 1 -> 2 -> 3 -> 4 -> 5 -> null
            const node5 = new ListNode(5);
            const node4 = new ListNode(4, node5);
            const node3 = new ListNode(3, node4);
            const node2 = new ListNode(2, node3);
            const node1 = new ListNode(1, node2);
            
            const result = reverseList(node1);
            
            // Check if reversed correctly: 5 -> 4 -> 3 -> 2 -> 1 -> null
            let current = result;
            const expected = [5, 4, 3, 2, 1];
            let index = 0;
            
            while (current !== null && index < expected.length) {
              if (current.val !== expected[index]) {
                return new TestResult({
                  passed: false,
                  message: `Expected ${expected[index]} at position ${index}, got ${current.val}`
                });
              }
              current = current.next;
              index++;
            }
            
            if (current === null && index === expected.length) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `List length mismatch or incorrect termination`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should reverse longer linked lists correctly."
      }
    ]
  }
};