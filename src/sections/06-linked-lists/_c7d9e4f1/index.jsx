import { TestResult } from "@nss-workshops/nss-core";

export default {
  id: 'c7d9e4f1',
  title: 'Building a Linked List from Scratch',
  sectionId: 'linked-lists',
  previousChapterId: null,
  content: `

This exercise will guide you through building a complete linked list implementation from the ground up. You'll implement each component step by step, starting with the basic Node structure and progressively adding more functionality.

## Implementation Phases

**Phase 1: Node Factory Function**
- Create a function that returns node objects with data and next properties

**Phase 2: LinkedList Factory Function**
- Create the main LinkedList factory function with head property and size tracking

**Phase 3: addToHead**
- Add elements to the beginning of the list

**Phase 4: addToTail**
- Add elements to the end of the list

**Phase 5: removeFromHead**
- Remove and return the first element

**Phase 6: removeFromTail**
- Remove and return the last element

**Phase 7: contains**
- Check if a value exists in the list

**Phase 8: indexOf**
- Find the index of a value in the list

**Phase 9: removeAt**
- Remove element at a specific index

**Phase 10: insertAt**
- Insert element at a specific index

**Phase 11: getBigONotations**
- Return an object with Big O notation for all methods, example: 
      return {
        addToHead: "O(1)",
        addToTail: "O(1)",
        removeFromHead: "O(n)",
        removeFromTail: "O(1)",
        contains: "O(n^2)",
        . . .
      }

Each phase builds upon the previous ones, creating a fully functional linked list with comprehensive test coverage and performance analysis.`,
  exercises: [{
    starterCode:`/*
Building a Linked List from Scratch

Implement a complete linked list data structure with the following methods:

Phase 1: createNode(data) - factory function
Phase 2: createLinkedList() - factory function that returns object with methods
Phase 3: addToHead(data)
Phase 4: addToTail(data)
Phase 5: removeFromHead()
Phase 6: removeFromTail()
Phase 7: contains(data)
Phase 8: indexOf(data)
Phase 9: removeAt(index)
Phase 10: insertAt(index, data)
Phase 11: getBigONotations() - returns object with Big O for all methods

Requirements:
- Track the size of the list
- Handle edge cases (empty list, invalid indices)
- Return appropriate values for each method
- Use function-based approach (no classes)
*/

// Phase 1: Node factory function
function createNode(data) {
  // Your code here
}

// Phase 2: LinkedList factory function
function createLinkedList() {
  // Your code here - return object with methods
}

// Example usage:
// const list = createLinkedList();
// list.addToHead(5);
// console.log(list.getBigONotations());`,
    solution:`/*
Building a Linked List from Scratch

Complete implementation with all phases:
*/

// Phase 1: Node factory function
function createNode(data) {
  return {
    data: data,
    next: null
  };
}

// Phase 2: LinkedList factory function
function createLinkedList() {
  let head = null;
  let size = 0;

  return {
    // Phase 3: Add to head
    addToHead(data) {
      const newNode = createNode(data);
      newNode.next = head;
      head = newNode;
      size++;
    },

    // Phase 4: Add to tail
    addToTail(data) {
      const newNode = createNode(data);
      
      if (!head) {
        head = newNode;
      } else {
        let current = head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      size++;
    },

    // Phase 5: Remove from head
    removeFromHead() {
      if (!head) {
        return null;
      }
      
      const removedData = head.data;
      head = head.next;
      size--;
      return removedData;
    },

    // Phase 6: Remove from tail
    removeFromTail() {
      if (!head) {
        return null;
      }
      
      if (!head.next) {
        const removedData = head.data;
        head = null;
        size--;
        return removedData;
      }
      
      let current = head;
      while (current.next.next) {
        current = current.next;
      }
      
      const removedData = current.next.data;
      current.next = null;
      size--;
      return removedData;
    },

    // Phase 7: Check if contains value
    contains(data) {
      let current = head;
      while (current) {
        if (current.data === data) {
          return true;
        }
        current = current.next;
      }
      return false;
    },

    // Phase 8: Find index of value
    indexOf(data) {
      let current = head;
      let index = 0;
      
      while (current) {
        if (current.data === data) {
          return index;
        }
        current = current.next;
        index++;
      }
      return -1;
    },

    // Phase 9: Remove at index
    removeAt(index) {
      if (index < 0 || index >= size) {
        return null;
      }
      
      if (index === 0) {
        return this.removeFromHead();
      }
      
      let current = head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      
      const removedData = current.next.data;
      current.next = current.next.next;
      size--;
      return removedData;
    },

    // Phase 10: Insert at index
    insertAt(index, data) {
      if (index < 0 || index > size) {
        return false;
      }
      
      if (index === 0) {
        this.addToHead(data);
        return true;
      }
      
      if (index === size) {
        this.addToTail(data);
        return true;
      }
      
      const newNode = createNode(data);
      let current = head;
      
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      
      newNode.next = current.next;
      current.next = newNode;
      size++;
      return true;
    },

    // Helper method to get size
    getSize() {
      return size;
    },

    // Helper method to check if empty
    isEmpty() {
      return size === 0;
    },

    // Phase 11: Get Big O notations for all methods
    getBigONotations() {
      return {
        addToHead: "O(1)",
        addToTail: "O(n)",
        removeFromHead: "O(1)",
        removeFromTail: "O(n)",
        contains: "O(n)",
        indexOf: "O(n)",
        removeAt: "O(n)",
        insertAt: "O(n)",
        getSize: "O(1)",
        isEmpty: "O(1)"
      };
    }
  };
}`,
    tests:[
      {
        name: "Phase 1 & 2: Node and LinkedList creation",
        test: (code) => {
          try {
            const { createNode, createLinkedList } = new Function(`${code}; return { createNode, createLinkedList };`)();
            const list = createLinkedList();
            const node = createNode(5);
            
            const nodeTest = node.data === 5 && node.next === null;
            const listTest = list.getSize() === 0 && list.isEmpty() === true;
            
            if (nodeTest && listTest) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: "Node should have data and next properties, LinkedList should have size and helper methods"
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Node factory and LinkedList factory functions should be properly implemented."
      },
      {
        name: "Phase 3: addToHead functionality",
        test: (code) => {
          try {
            const { createLinkedList } = new Function(`${code}; return { createLinkedList };`)();
            const list = createLinkedList();
            
            list.addToHead(1);
            list.addToHead(2);
            list.addToHead(3);
            
            const sizeTest = list.getSize() === 3;
            // We can't directly access head, so we test through other methods
            const firstRemoved = list.removeFromHead();
            const secondRemoved = list.removeFromHead();
            const thirdRemoved = list.removeFromHead();
            
            if (sizeTest && firstRemoved === 3 && secondRemoved === 2 && thirdRemoved === 1) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: "addToHead should add elements to the beginning and maintain proper order"
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "addToHead should add elements to the beginning of the list."
      },
      {
        name: "Phase 4: addToTail functionality",
        test: (code) => {
          try {
            const { createLinkedList } = new Function(`${code}; return { createLinkedList };`)();
            const list = createLinkedList();
            
            list.addToTail(1);
            list.addToTail(2);
            list.addToTail(3);
            
            const sizeTest = list.getSize() === 3;
            const firstRemoved = list.removeFromHead();
            const secondRemoved = list.removeFromHead();
            const thirdRemoved = list.removeFromHead();
            
            if (sizeTest && firstRemoved === 1 && secondRemoved === 2 && thirdRemoved === 3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: "addToTail should add elements to the end and maintain proper order"
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "addToTail should add elements to the end of the list."
      },
      {
        name: "Phase 5: removeFromHead functionality",
        test: (code) => {
          try {
            const { createLinkedList } = new Function(`${code}; return { createLinkedList };`)();
            const list = createLinkedList();
            
            // Test empty list
            const emptyResult = list.removeFromHead();
            
            list.addToHead(1);
            list.addToHead(2);
            list.addToHead(3);
            
            const removed1 = list.removeFromHead();
            const removed2 = list.removeFromHead();
            
            const emptyTest = emptyResult === null;
            const removeTest = removed1 === 3 && removed2 === 2;
            const sizeTest = list.getSize() === 1;
            
            if (emptyTest && removeTest && sizeTest) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: "removeFromHead should remove and return head element, handle empty list"
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "removeFromHead should remove and return the first element."
      },
      {
        name: "Phase 6: removeFromTail functionality",
        test: (code) => {
          try {
            const { createLinkedList } = new Function(`${code}; return { createLinkedList };`)();
            const list = createLinkedList();
            
            // Test empty list
            const emptyResult = list.removeFromTail();
            
            list.addToTail(1);
            list.addToTail(2);
            list.addToTail(3);
            
            const removed1 = list.removeFromTail();
            const removed2 = list.removeFromTail();
            
            const emptyTest = emptyResult === null;
            const removeTest = removed1 === 3 && removed2 === 2;
            const sizeTest = list.getSize() === 1;
            
            if (emptyTest && removeTest && sizeTest) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: "removeFromTail should remove and return tail element, handle empty list"
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "removeFromTail should remove and return the last element."
      },
      {
        name: "Phase 7: contains functionality",
        test: (code) => {
          try {
            const { createLinkedList } = new Function(`${code}; return { createLinkedList };`)();
            const list = createLinkedList();
            
            const emptyTest = list.contains(5) === false;
            
            list.addToTail(1);
            list.addToTail(2);
            list.addToTail(3);
            
            const foundTest = list.contains(2) === true;
            const notFoundTest = list.contains(5) === false;
            
            if (emptyTest && foundTest && notFoundTest) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: "contains should return true if element exists, false otherwise"
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "contains should check if a value exists in the list."
      },
      {
        name: "Phase 8: indexOf functionality",
        test: (code) => {
          try {
            const { createLinkedList } = new Function(`${code}; return { createLinkedList };`)();
            const list = createLinkedList();
            
            const emptyTest = list.indexOf(5) === -1;
            
            list.addToTail(1);
            list.addToTail(2);
            list.addToTail(3);
            list.addToTail(2);
            
            const foundTest = list.indexOf(2) === 1; // First occurrence
            const notFoundTest = list.indexOf(5) === -1;
            const firstTest = list.indexOf(1) === 0;
            const lastTest = list.indexOf(3) === 2;
            
            if (emptyTest && foundTest && notFoundTest && firstTest && lastTest) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: "indexOf should return index of first occurrence, -1 if not found"
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "indexOf should return the index of the first occurrence of a value."
      },
      {
        name: "Phase 9: removeAt functionality",
        test: (code) => {
          try {
            const { createLinkedList } = new Function(`${code}; return { createLinkedList };`)();
            const list = createLinkedList();
            
            list.addToTail(1);
            list.addToTail(2);
            list.addToTail(3);
            list.addToTail(4);
            
            const invalidTest = list.removeAt(-1) === null && list.removeAt(10) === null;
            const middleRemove = list.removeAt(1); // Remove 2
            const headRemove = list.removeAt(0); // Remove 1
            const tailRemove = list.removeAt(1); // Remove 4 (now at index 1)
            
            const removeTest = middleRemove === 2 && headRemove === 1 && tailRemove === 4;
            const sizeTest = list.getSize() === 1;
            const remainingTest = list.contains(3) === true;
            
            if (invalidTest && removeTest && sizeTest && remainingTest) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: "removeAt should remove element at index, return null for invalid indices"
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "removeAt should remove and return element at specified index."
      },
      {
        name: "Phase 10: insertAt functionality",
        test: (code) => {
          try {
            const { createLinkedList } = new Function(`${code}; return { createLinkedList };`)();
            const list = createLinkedList();
            
            const invalidTest = list.insertAt(-1, 5) === false && list.insertAt(10, 5) === false;
            
            const headInsert = list.insertAt(0, 1); // Insert at head
            const tailInsert = list.insertAt(1, 3); // Insert at tail
            const middleInsert = list.insertAt(1, 2); // Insert in middle
            
            const insertTest = headInsert === true && tailInsert === true && middleInsert === true;
            const sizeTest = list.getSize() === 3;
            const orderTest = list.indexOf(1) === 0 && 
                             list.indexOf(2) === 1 && 
                             list.indexOf(3) === 2;
            
            if (invalidTest && insertTest && sizeTest && orderTest) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: "insertAt should insert element at index, return false for invalid indices"
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "insertAt should insert element at specified index."
      },
      {
        name: "Phase 11: getBigONotations functionality",
        test: (code) => {
          try {
            const { createLinkedList } = new Function(`${code}; return { createLinkedList };`)();
            const list = createLinkedList();
            
            const bigO = list.getBigONotations();
            
            const expectedKeys = ['addToHead', 'addToTail', 'removeFromHead', 'removeFromTail', 
                                'contains', 'indexOf', 'removeAt', 'insertAt', 'getSize', 'isEmpty'];
            
            const hasAllKeys = expectedKeys.every(key => Object.prototype.hasOwnProperty.call(bigO, key));
            const correctNotations = bigO.addToHead === "O(1)" && 
                                   bigO.addToTail === "O(n)" &&
                                   bigO.removeFromHead === "O(1)" &&
                                   bigO.removeFromTail === "O(n)" &&
                                   bigO.contains === "O(n)" &&
                                   bigO.indexOf === "O(n)" &&
                                   bigO.removeAt === "O(n)" &&
                                   bigO.insertAt === "O(n)" &&
                                   bigO.getSize === "O(1)" &&
                                   bigO.isEmpty === "O(1)";
            
            if (hasAllKeys && correctNotations) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: "getBigONotations should return correct Big O notation for all methods"
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "getBigONotations should return Big O complexity for all methods."
      },
      {
        name: "Integration test: Complete functionality",
        test: (code) => {
          try {
            const { createLinkedList } = new Function(`${code}; return { createLinkedList };`)();
            const list = createLinkedList();
            
            // Build list: [1, 2, 3, 4, 5]
            list.addToTail(3);
            list.addToHead(2);
            list.addToHead(1);
            list.addToTail(4);
            list.insertAt(4, 5);
            
            // Test all methods
            const sizeTest = list.getSize() === 5;
            const containsTest = list.contains(3) === true && list.contains(6) === false;
            const indexTest = list.indexOf(4) === 3;
            const bigOTest = typeof list.getBigONotations() === 'object';
            
            // Remove middle element
            const removeTest = list.removeAt(2) === 3; // Remove 3
            
            // Final state should be [1, 2, 4, 5]
            const finalSize = list.getSize() === 4;
            const finalOrder = list.indexOf(1) === 0 && 
                              list.indexOf(2) === 1 && 
                              list.indexOf(4) === 2 && 
                              list.indexOf(5) === 3;
            
            if (sizeTest && containsTest && indexTest && bigOTest && removeTest && finalSize && finalOrder) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: "Integration test failed - all methods should work together correctly"
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "All methods should work together correctly in a complete linked list."
      }
    ]
  }]
};