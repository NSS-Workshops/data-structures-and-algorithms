import { TestResult } from "@nss-workshops/nss-core";

export default {
  id: 'e8f1a5b3',
  title: 'DSA Challenge 3 - Linked List: build, iterate, add, remove',
  sectionId: 'combining-patterns',
  previousChapterId: null,
  content: `

**Navigate:** [1](9b8a8427) | [2](a4b7c9d2) | 3 | [4](c6d9e2f4) | [5](b3a8d7c1) | [6](f9e4b2a7) | [7](d1c5f8e3) | [8](a7b2e9f6) | [9](c4f7a1d8)

## 👥 Pair Programming Instructions

**Work in pairs for this challenge!** One person should be the **Driver** (writing code) and the other the **Navigator** (reviewing and guiding). **Switch roles for each function** you implement.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jqGmL6Hf23k?si=qXmQcnQigfo1adTb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Why it matters:** Linked lists train pointer thinking and reveal trade-offs vs arrays.

**Objectives:**
- Build a singly linked list (no libraries).
- Add (append), remove (by value), iterate (forEach).
- Explain why random access by index is **O(n)** and insert/remove at a node is **O(1)**.

**Time Estimate:** 20 minutes

## Problems to Solve:

1. **Node class** - Basic node with value and next pointer
   - Example: \`new Node(5)\` → Node with value=5, next=null
   - Example: \`new Node(3, someNode)\` → Node with value=3, next=someNode

2. **LinkedList class** - With head, tail, length tracking
   - Example: \`new LinkedList()\` → Empty list with head=null, tail=null, length=0

3. **append(value)** - O(1) with tail pointer
   - Example: \`list.append(1); list.append(2)\` → List: 1 → 2, length=2
   - Example: \`list.append('hello')\` → Adds 'hello' to end of list

4. **remove(value)** - Remove first node with matching value; return true if removed
   - Example: \`list.remove(2)\` → \`true\` (if 2 exists), removes first occurrence
   - Example: \`list.remove(99)\` → \`false\` (if 99 doesn't exist)

5. **forEach(fn)** - Call fn(value, index) for each node
   - Example: \`list.forEach((val, i) => console.log(val, i))\` → Prints each value with index
   - Example: \`list.forEach(val => sum += val)\` → Accumulates values

## Big-O Analysis:
- **Index access requires walking nodes => O(n)**
- **Insert/remove at known node => O(1)**
- **Append with tail pointer => O(1)**`,

  exercises: [{
    starterCode: `/*
Challenge 3: Linked List — build, iterate, add, remove

Implement a singly linked list with the following:

1. Node class - constructor(value, next=null)
2. LinkedList class with:
   - constructor() - initialize head, tail, length
   - append(value) - O(1) with tail
   - remove(value) - remove first node with matching value; return true if removed
   - forEach(fn) - call fn(value, index) for each node
*/

class Node {
  constructor(value, next = null) {
    // Your code here
  }
}

class LinkedList {
  constructor() {
    // Your code here
  }
  
  append(value) {
    // O(1) with tail
    // Your code here
  }
  
  remove(value) {
    // remove first node with matching value; return true if removed
    // Your code here
  }
  
  forEach(fn) {
    // call fn(value, index) for each node
    // Your code here
  }
}`,

    solution: `/*
Challenge 3: Linked List — build, iterate, add, remove
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() { 
    this.head = null; 
    this.tail = null; 
    this.length = 0; 
  }
  
  append(value) {
    // O(1) with tail
    const n = new Node(value);
    if (!this.head) { 
      this.head = this.tail = n; 
    } else { 
      this.tail.next = n; 
      this.tail = n; 
    }
    this.length++;
  }
  
  remove(value) {
    // remove first node with matching value; return true if removed
    if (!this.head) return false;
    
    if (this.head.value === value) {
      this.head = this.head.next; 
      if (!this.head) this.tail = null; 
      this.length--; 
      return true;
    }
    
    let prev = this.head;
    let cur = this.head.next;
    
    while (cur) {
      if (cur.value === value) { 
        prev.next = cur.next; 
        if (cur === this.tail) this.tail = prev; 
        this.length--; 
        return true; 
      }
      prev = cur; 
      cur = cur.next;
    }
    
    return false;
  }
  
  forEach(fn) {
    // call fn(value, index) for each node
    let i = 0;
    let cur = this.head; 
    while(cur) { 
      fn(cur.value, i++); 
      cur = cur.next; 
    }
  }
}

// Index access requires walking nodes => O(n).`,

    tests: [
      {
        name: "LinkedList basic operations work",
        test: (code) => {
          try {
            const classes = new Function(`${code}; \n return { Node, LinkedList };`)();
            const list = new classes.LinkedList();
            
            list.append(1);
            list.append(2);
            list.append(3);
            
            let arr = [];
            list.forEach((v) => arr.push(v));
            
            if (JSON.stringify(arr) === JSON.stringify([1, 2, 3]) && list.length === 3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected [1,2,3], got ${JSON.stringify(arr)}, length: ${list.length}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "LinkedList should append and iterate correctly."
      },
      {
        name: "Remove works correctly",
        test: (code) => {
          try {
            const classes = new Function(`${code}; \n return { Node, LinkedList };`)();
            const list = new classes.LinkedList();
            
            list.append(1);
            list.append(2);
            list.append(3);
            
            const removed = list.remove(2);
            let arr = [];
            list.forEach((v) => arr.push(v));
            
            if (removed === true && JSON.stringify(arr) === JSON.stringify([1, 3]) && list.length === 2) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Remove result: ${removed}, array: ${JSON.stringify(arr)}, length: ${list.length}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Remove should work correctly and return true when element found."
      },
      {
        name: "Remove returns false when element not found",
        test: (code) => {
          try {
            const classes = new Function(`${code}; \n return { Node, LinkedList };`)();
            const list = new classes.LinkedList();
            
            list.append(1);
            list.append(3);
            
            const removed = list.remove(42);
            
            if (removed === false && list.length === 2) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected false, got ${removed}, length: ${list.length}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Remove should return false when element not found."
      }
    ]
  }]
};