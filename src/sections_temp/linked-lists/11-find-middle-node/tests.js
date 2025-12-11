import { TestResult } from "@nss-workshops/nss-core";

export const tests = [
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
];