import { TestResult } from "../../utils/test_utils";

export const codeExcerciseOneChapter = {
  id: 'ecd7c83d',
  title: 'Module 11 - Code Excercise 1',
  sectionId: 'interview-readiness',
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

## Problem: Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

### Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would you merge k sorted lists?`,
  exercise: {
    starterCode:`/*
Problem: Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Examples:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: list1 = [], list2 = []
Output: []

Input: list1 = [], list2 = [0]
Output: [0]

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
- How would you merge k sorted lists?
*/

function mergeTwoLists(list1, list2) {
  // Approach: Use two pointers to merge sorted lists
  // Create dummy node to simplify edge cases
  // Compare values and link smaller node to result
  // Handle remaining nodes from longer list
  
  // Your code here
}`,
    solution:`/*
Problem: Merge Two Sorted Lists

Merge two sorted linked lists into one sorted list.
*/

function mergeTwoLists(list1, list2) {
  // Create a dummy node to simplify edge cases
  const dummy = { val: 0, next: null };
  let current = dummy;
  
  // Merge nodes while both lists have elements
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      // Link the smaller node (list1)
      current.next = list1;
      list1 = list1.next;
    } else {
      // Link the smaller node (list2)
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  
  // Attach remaining nodes from the non-empty list
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }
  
  // Return the merged list (skip dummy node)
  return dummy.next;
  
  // Time Complexity: O(n + m) where n and m are lengths of the two lists
  // Space Complexity: O(1) - only using constant extra space for pointers
  // We're reusing existing nodes, not creating new ones
}`,
    tests:[
      {
        name: "Merge basic sorted lists",
        test: (code) => {
          try {
            class ListNode {
              constructor(val, next) {
                this.val = (val === undefined ? 0 : val);
                this.next = (next === undefined ? null : next);
              }
            }
            
            const mergeTwoLists = new Function(`
              class ListNode {
                constructor(val, next) {
                  this.val = (val === undefined ? 0 : val);
                  this.next = (next === undefined ? null : next);
                }
              }
              ${code}; 
              return mergeTwoLists;
            `)();
            
            // Create list1: 1 -> 2 -> 4
            const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
            
            // Create list2: 1 -> 3 -> 4
            const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
            
            const result = mergeTwoLists(list1, list2);
            
            // Check result: 1 -> 1 -> 2 -> 3 -> 4 -> 4
            const expected = [1, 1, 2, 3, 4, 4];
            let current = result;
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
        message: "Function should merge two sorted lists correctly."
      },
      {
        name: "Handle empty lists",
        test: (code) => {
          try {
            class ListNode {
              constructor(val, next) {
                this.val = (val === undefined ? 0 : val);
                this.next = (next === undefined ? null : next);
              }
            }
            
            const mergeTwoLists = new Function(`
              class ListNode {
                constructor(val, next) {
                  this.val = (val === undefined ? 0 : val);
                  this.next = (next === undefined ? null : next);
                }
              }
              ${code}; 
              return mergeTwoLists;
            `)();
            
            // Test empty + empty
            const test1 = mergeTwoLists(null, null) === null;
            
            // Test empty + non-empty
            const list2 = new ListNode(0);
            const result2 = mergeTwoLists(null, list2);
            const test2 = result2 && result2.val === 0 && result2.next === null;
            
            // Test non-empty + empty
            const list3 = new ListNode(1);
            const result3 = mergeTwoLists(list3, null);
            const test3 = result3 && result3.val === 1 && result3.next === null;
            
            if (test1 && test2 && test3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Empty list cases failed. Test1: ${test1}, Test2: ${test2}, Test3: ${test3}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle empty lists correctly."
      },
      {
        name: "Handle different length lists",
        test: (code) => {
          try {
            class ListNode {
              constructor(val, next) {
                this.val = (val === undefined ? 0 : val);
                this.next = (next === undefined ? null : next);
              }
            }
            
            const mergeTwoLists = new Function(`
              class ListNode {
                constructor(val, next) {
                  this.val = (val === undefined ? 0 : val);
                  this.next = (next === undefined ? null : next);
                }
              }
              ${code}; 
              return mergeTwoLists;
            `)();
            
            // Create list1: 1 -> 3 -> 5 -> 7 -> 9
            const list1 = new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(7, new ListNode(9)))));
            
            // Create list2: 2 -> 4
            const list2 = new ListNode(2, new ListNode(4));
            
            const result = mergeTwoLists(list1, list2);
            
            // Check result: 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 9
            const expected = [1, 2, 3, 4, 5, 7, 9];
            let current = result;
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
                message: `Different length lists merge failed`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle lists of different lengths."
      },
      {
        name: "Handle duplicate values",
        test: (code) => {
          try {
            class ListNode {
              constructor(val, next) {
                this.val = (val === undefined ? 0 : val);
                this.next = (next === undefined ? null : next);
              }
            }
            
            const mergeTwoLists = new Function(`
              class ListNode {
                constructor(val, next) {
                  this.val = (val === undefined ? 0 : val);
                  this.next = (next === undefined ? null : next);
                }
              }
              ${code}; 
              return mergeTwoLists;
            `)();
            
            // Create list1: 1 -> 1 -> 2
            const list1 = new ListNode(1, new ListNode(1, new ListNode(2)));
            
            // Create list2: 1 -> 2 -> 2
            const list2 = new ListNode(1, new ListNode(2, new ListNode(2)));
            
            const result = mergeTwoLists(list1, list2);
            
            // Check result: 1 -> 1 -> 1 -> 2 -> 2 -> 2
            const expected = [1, 1, 1, 2, 2, 2];
            let current = result;
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
                message: `Duplicate values merge failed`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle duplicate values correctly."
      }
    ]
  }
};