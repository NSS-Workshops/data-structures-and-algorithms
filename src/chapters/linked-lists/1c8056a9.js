import { TestResult } from "@nss-workshops/nss-core";

export const codeExcerciseTwoChapter = {
  id: '1c8056a9',
  title: 'Module 5 - Code Excercise 2',
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

## Problem: Find Middle Node of Linked List

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Use the two-pointer technique (tortoise and hare) to solve this in one pass.

### Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would you find the node at 1/3 position?`,
  exercise: {
    starterCode:`/*
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
}`,
    solution:`/*
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
}`,
    tests:[
      {
        name: "Find middle of odd-length list",
        test: (code) => {
          try {
            class ListNode {
              constructor(val, next) {
                this.val = (val === undefined ? 0 : val);
                this.next = (next === undefined ? null : next);
              }
            }
            
            const findMiddleNode = new Function(`
              class ListNode {
                constructor(val, next) {
                  this.val = (val === undefined ? 0 : val);
                  this.next = (next === undefined ? null : next);
                }
              }
              ${code}; 
              return findMiddleNode;
            `)();
            
            // Create test list: 1 -> 2 -> 3 -> 4 -> 5 -> null (length 5)
            const node5 = new ListNode(5);
            const node4 = new ListNode(4, node5);
            const node3 = new ListNode(3, node4);
            const node2 = new ListNode(2, node3);
            const node1 = new ListNode(1, node2);
            
            const result = findMiddleNode(node1);
            
            if (result && result.val === 3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected middle node with value 3, got ${result ? result.val : 'null'}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should find middle node of odd-length list."
      },
      {
        name: "Find middle of even-length list",
        test: (code) => {
          try {
            class ListNode {
              constructor(val, next) {
                this.val = (val === undefined ? 0 : val);
                this.next = (next === undefined ? null : next);
              }
            }
            
            const findMiddleNode = new Function(`
              class ListNode {
                constructor(val, next) {
                  this.val = (val === undefined ? 0 : val);
                  this.next = (next === undefined ? null : next);
                }
              }
              ${code}; 
              return findMiddleNode;
            `)();
            
            // Create test list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null (length 6)
            const node6 = new ListNode(6);
            const node5 = new ListNode(5, node6);
            const node4 = new ListNode(4, node5);
            const node3 = new ListNode(3, node4);
            const node2 = new ListNode(2, node3);
            const node1 = new ListNode(1, node2);
            
            const result = findMiddleNode(node1);
            
            if (result && result.val === 4) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected middle node with value 4 (second middle), got ${result ? result.val : 'null'}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should find second middle node of even-length list."
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
            
            const findMiddleNode = new Function(`
              class ListNode {
                constructor(val, next) {
                  this.val = (val === undefined ? 0 : val);
                  this.next = (next === undefined ? null : next);
                }
              }
              ${code}; 
              return findMiddleNode;
            `)();
            
            const singleNode = new ListNode(42);
            const result = findMiddleNode(singleNode);
            
            if (result && result.val === 42) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected single node with value 42, got ${result ? result.val : 'null'}`
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
        name: "Handle empty list",
        test: (code) => {
          try {
            // ListNode class defined in function scope for testing
            
            const findMiddleNode = new Function(`
              class ListNode {
                constructor(val, next) {
                  this.val = (val === undefined ? 0 : val);
                  this.next = (next === undefined ? null : next);
                }
              }
              ${code}; 
              return findMiddleNode;
            `)();
            
            const result = findMiddleNode(null);
            
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
        name: "Handle two-node list",
        test: (code) => {
          try {
            class ListNode {
              constructor(val, next) {
                this.val = (val === undefined ? 0 : val);
                this.next = (next === undefined ? null : next);
              }
            }
            
            const findMiddleNode = new Function(`
              class ListNode {
                constructor(val, next) {
                  this.val = (val === undefined ? 0 : val);
                  this.next = (next === undefined ? null : next);
                }
              }
              ${code}; 
              return findMiddleNode;
            `)();
            
            // Create test list: 1 -> 2 -> null (length 2)
            const node2 = new ListNode(2);
            const node1 = new ListNode(1, node2);
            
            const result = findMiddleNode(node1);
            
            // For even length, should return second middle (node 2)
            if (result && result.val === 2) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected second middle node with value 2, got ${result ? result.val : 'null'}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle two-node list correctly."
      }
    ]
  }
};