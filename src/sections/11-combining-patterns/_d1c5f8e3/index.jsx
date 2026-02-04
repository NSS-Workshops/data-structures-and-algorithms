import { TestResult } from "@nss-workshops/nss-core";

export default {
  id: 'd1c5f8e3',
  title: 'DSA Challenge 7 - Queue: use it to build a RecentCounter',
  sectionId: 'combining-patterns',
  previousChapterId: null,
  content: `

**Navigate:** [1](9b8a8427) | [2](a4b7c9d2) | [3](e8f1a5b3) | [4](c6d9e2f4) | [5](b3a8d7c1) | [6](f9e4b2a7) | 7 | [8](a7b2e9f6) | [9](c4f7a1d8)

## 👥 Pair Programming Instructions

**Work in pairs for this challenge!** One person should be the **Driver** (writing code) and the other the **Navigator** (reviewing and guiding). **Switch roles for each function** you implement.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jqGmL6Hf23k?si=qXmQcnQigfo1adTb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Why it matters:** Real-world systems (APIs, telemetry) often need to count events in a rolling window. A FIFO queue makes expiring old events O(1) amortized.

**Objectives:**
- Use a provided linked-list Queue (already implemented).
- Implement \`RecentCounter.ping(t)\` that returns the number of pings in \`[t-3000, t]\`.
- Explain why enqueue/dequeue are O(1) with a linked list.

**Time Estimate:** 20 minutes

## Problem to Solve:

**RecentCounter class** - Implement \`ping(t)\` that:
1. Adds timestamp t to the queue
2. Removes timestamps < t-3000 (outside the window)
3. Returns count of pings in window [t-3000, t]

**Examples:**
   - \`rc.ping(1)\` → \`1\` (window: [1], count: 1)
   - \`rc.ping(100)\` → \`2\` (window: [1, 100], count: 2)
   - \`rc.ping(3001)\` → \`3\` (window: [1, 100, 3001], count: 3)
   - \`rc.ping(3002)\` → \`3\` (window: [100, 3001, 3002], count: 3, removed 1)
   - \`rc.ping(7000)\` → \`1\` (window: [7000], count: 1, removed old pings)

## Algorithm:
1. Enqueue the new timestamp
2. Dequeue old timestamps that are outside the 3000ms window
3. Return the current queue length

## Big-O Analysis:
- **Each ping enqueues once and dequeues expired times once overall => O(1) amortized per ping**
- **Space: O(k)** where k is max pings in any 3000ms window`,

  exercises: [{
    starterCode: `/*
Challenge 7: Queue — use it to build a RecentCounter

Use the provided Queue classes to implement a RecentCounter that tracks
pings in a sliding 3000ms window.

The Queue classes have these methods:
- enqueue(x) - add element to back
- dequeue() - remove and return front element  
- peek() - return front element without removing
- length - get number of elements
*/

// ✅ Provided Queue implementation — do NOT modify
class QNode{ constructor(value,next=null){ this.value=value; this.next=next; } }
class Queue{
  constructor(){ this.head=null; this.tail=null; this.length=0; }
  enqueue(x){ const n=new QNode(x); if(!this.head){this.head=this.tail=n;} else{this.tail.next=n; this.tail=n;} this.length++; }
  dequeue(){ if(!this.head) return undefined; const v=this.head.value; this.head=this.head.next; if(!this.head) this.tail=null; this.length--; return v; }
  peek(){ return this.head ? this.head.value : undefined; }
}

// TODO: Implement using the provided Queue
class RecentCounter{
  constructor(){ 
    // Your code here
  }
  
  ping(t){
    // Add t, remove times < t-3000, return count in window
    // Your code here
  }
}`,

    solution: `/*
Challenge 7: Queue — use it to build a RecentCounter
*/

// ✅ Provided Queue implementation — do NOT modify
class QNode{ constructor(value,next=null){ this.value=value; this.next=next; } }
class Queue{
  constructor(){ this.head=null; this.tail=null; this.length=0; }
  enqueue(x){ const n=new QNode(x); if(!this.head){this.head=this.tail=n;} else{this.tail.next=n; this.tail=n;} this.length++; }
  dequeue(){ if(!this.head) return undefined; const v=this.head.value; this.head=this.head.next; if(!this.head) this.tail=null; this.length--; return v; }
  peek(){ return this.head ? this.head.value : undefined; }
}

// TODO: Implement using the provided Queue
class RecentCounter{
  constructor(){ 
    this.q = new Queue(); 
  }
  
  ping(t){
    // Add t, remove times < t-3000, return count in window
    this.q.enqueue(t);
    
    const lower = t - 3000;
    
    // Remove timestamps outside the window
    while (this.q.peek() !== undefined && this.q.peek() < lower) {
      this.q.dequeue();
    }
    
    return this.q.length;
  }
}

// Each ping enqueues once and dequeues expired times once overall => O(1) amortized per ping.`,

    tests: [
      {
        name: "RecentCounter basic functionality",
        test: (code) => {
          try {
            const classes = new Function(`${code}; \n return { QNode, Queue, RecentCounter };`)();
            const rc = new classes.RecentCounter();
            
            const result1 = rc.ping(1);      // [1]
            const result2 = rc.ping(100);    // [1,100]
            const result3 = rc.ping(3001);   // [1,100,3001]
            
            if (result1 === 1 && result2 === 2 && result3 === 3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Results: ${result1}, ${result2}, ${result3}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "RecentCounter should track pings correctly."
      },
      {
        name: "RecentCounter removes old pings",
        test: (code) => {
          try {
            const classes = new Function(`${code}; \n return { QNode, Queue, RecentCounter };`)();
            const rc = new classes.RecentCounter();
            
            rc.ping(1);      // [1]
            rc.ping(100);    // [1,100]
            rc.ping(3001);   // [1,100,3001]
            const result4 = rc.ping(3002);   // window is [2..3002] => [100,3001,3002]
            
            if (result4 === 3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected 3, got ${result4}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "RecentCounter should remove pings outside the window."
      },
      {
        name: "RecentCounter handles large time jumps",
        test: (code) => {
          try {
            const classes = new Function(`${code}; \n return { QNode, Queue, RecentCounter };`)();
            const rc = new classes.RecentCounter();
            
            rc.ping(1);
            rc.ping(100);
            rc.ping(3001);
            rc.ping(3002);
            const result5 = rc.ping(7000);   // window is [4000..7000] => [7000]
            
            if (result5 === 1) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected 1, got ${result5}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "RecentCounter should handle large time jumps correctly."
      }
    ]
  }]
};