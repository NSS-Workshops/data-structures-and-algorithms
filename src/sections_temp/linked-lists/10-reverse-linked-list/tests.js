import { TestResult } from "@nss-workshops/nss-core";

export const tests = [
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
];