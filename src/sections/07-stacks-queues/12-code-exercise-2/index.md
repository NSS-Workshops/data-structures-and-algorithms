# Code Exercise 2: Implement Queue using Two Stacks

Practice implementing a queue data structure using only two stacks, demonstrating the relationship between these fundamental data structures.

## Problem: Implement Queue using Two Stacks

Implement a first-in-first-out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (enqueue, dequeue, peek, empty).

Implement the MyQueue constructor function:
- `enqueue(x)` - Pushes element x to the back of the queue
- `dequeue()` - Removes the element from the front of the queue and returns it
- `peek()` - Returns the element at the front of the queue
- `empty()` - Returns true if the queue is empty, false otherwise

## Interview Practice

This exercise simulates a real coding interview experience:

⚠️ **Please do not share this URL / problem before class.**
Revealing the question early defeats the purpose of simulating a real-world interview, where candidates do not know the problem in advance.

🧠 **Before class:**
Take time to study the problem. During the session, you'll have 90 minutes in your breakout room to run a mock interview with your partner.

🗣️ **As the interviewer:**
- Send this URL to your partner
- Briefly introduce the problem
- Never give away the answer
- Take notes and provide feedback
- Fill out the feedback form

🗣️ **As the interviewee:**
- Ask clarifying questions
- Follow the problem-solving steps:
  1. Clarify
  2. Plan
  3. Implement
  4. Test
  5. Optimize

## Example Usage

```javascript
var queue = new MyQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.peek();     // returns 1
queue.dequeue();  // returns 1
queue.empty();    // returns false
```

## Follow-up Questions

- What are the time complexities of each operation?
- What is the space complexity?
- How does this compare to a queue implemented with a linked list?

Ready to explore the relationship between stacks and queues? Let's code!