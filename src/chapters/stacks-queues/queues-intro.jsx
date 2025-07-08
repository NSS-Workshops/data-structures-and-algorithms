import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

export const queuesIntroChapter = {
  id: "queues-intro",
  title: "Introduction to Queues - The Hold Request System",
  sectionId: "stacks-queues",
  previousChapterId: "stacks-intro",
  content: `
## A Busy Saturday Morning

Alex arrived at Willowbrook Library early on Saturday morning, still buzzing with excitement from yesterday's lesson about stacks. The weekend always brought more patrons, and Alex was eager to learn more about the library's systems.

Maya was already at the circulation desk, reviewing a list on her computer screen. "Perfect timing, Alex," she said with a smile. "Today we're going to explore a completely different system - one where fairness is absolutely crucial."

"What do you mean?" Alex asked, hanging up their jacket.

"Remember yesterday how we processed book returns? The last book in was the first one out - LIFO. But imagine if we handled patron requests that way." Maya's eyes twinkled with mischief. "What if the person who just walked in got helped before someone who'd been waiting for twenty minutes?"

Alex's eyes widened. "That would be terrible! People would be so frustrated."

"Exactly. So for situations where fairness matters - where we need to serve people in the order they arrived - we use a completely different principle called **FIFO**: First In, First Out. And the data structure that implements FIFO is called a **queue**."

## The Popular Book Problem

Just then, Sam Thompson burst through the library doors, looking slightly frazzled. "Maya! We have a situation. Mrs. Patterson is here asking about 'The Seven Husbands of Evelyn Hugo' - she says she's been waiting for weeks. But I just promised it to Mr. Chen who just walked in!"

Maya sighed knowingly. "Ah, the classic queue management problem. Alex, this is the perfect teachable moment. Sam, bring me the hold request list for that book."

Sam hurried to the computer and pulled up the digital hold list. "Here it is," he said, pointing to the screen.

Maya turned the monitor so Alex could see:

\`\`\`
Hold Requests for "The Seven Husbands of Evelyn Hugo"
═══════════════════════════════════════════════════════
1. Mrs. Patterson    (Requested: March 15, 2024)  ← Front
2. Dr. Williams      (Requested: March 18, 2024)
3. Sarah Kim         (Requested: March 22, 2024)
4. Mr. Rodriguez     (Requested: March 25, 2024)
5. Mr. Chen          (Requested: March 28, 2024)  ← Back
\`\`\`

"Now Alex," Maya said, "if we were using a stack system like our book returns, who would get the book first?"

Alex looked at the list. "If it were LIFO... Mr. Chen, since he requested it most recently?"

"Right! But is that fair?"

"No way!" Alex exclaimed. "Mrs. Patterson has been waiting almost two weeks longer!"

"Exactly. This is why we use a **queue** for hold requests. In a queue, the **first person in** is the **first person out** - FIFO. Mrs. Patterson requested the book first, so she gets it first. That's fair."

## Understanding Queue Structure

Maya drew a simple diagram on a piece of paper:

\`\`\`
Queue: Hold Requests (FIFO - First In, First Out)

Front                                           Back
┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│Mrs.Patterson│→ │Dr. Williams │→ │  Sarah Kim  │→ │Mr.Rodriguez │→ │  Mr. Chen   │
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘
      ↑                                                                      ↑
   Next to be                                                           Last to join
   served (dequeue)                                                     (enqueue)
\`\`\`

"See how this is different from our book stack?" Maya asked. "In a stack, we only worked with the top. But in a queue, we have two ends that matter:"

- **Front**: Where people leave the queue (get served)
- **Back**: Where people join the queue (make requests)

"It's like a line at the grocery store," Alex realized. "New people join at the back, and people get served from the front."

"Perfect analogy!" Maya beamed. "And just like a grocery store line, it would be unfair to serve people in any other order."

## Queue Operations in Action

### Enqueue: Adding New Hold Requests

As if on cue, a teenager approached the desk. "Excuse me," she said politely, "I'd like to place a hold on 'The Seven Husbands of Evelyn Hugo' too."

"Of course!" Maya said, turning to Alex. "This is called **enqueue** - adding someone to the back of the queue. Alex, would you like to add Emma to our hold list?"

Alex nodded and typed Emma's information into the system. The list now showed:

\`\`\`
Hold Requests for "The Seven Husbands of Evelyn Hugo"
═══════════════════════════════════════════════════════
1. Mrs. Patterson    (Requested: March 15, 2024)  ← Front
2. Dr. Williams      (Requested: March 18, 2024)
3. Sarah Kim         (Requested: March 22, 2024)
4. Mr. Rodriguez     (Requested: March 25, 2024)
5. Mr. Chen          (Requested: March 28, 2024)
6. Emma Thompson     (Requested: March 30, 2024)  ← Back (just added)
\`\`\`

"Notice how Emma goes to the back of the line," Maya pointed out. "That's the enqueue operation - we always add new elements to the back of the queue."

### Dequeue: Fulfilling Hold Requests

Just then, Maya's phone rang. After a brief conversation, she smiled. "Great news! The book just came back. Now we can fulfill the first hold request."

Maya pulled up Mrs. Patterson's contact information. "Alex, watch what happens when we fulfill a hold request. This is called **dequeue** - removing someone from the front of the queue."

After calling Mrs. Patterson and setting the book aside for her, Maya updated the system:

\`\`\`
Hold Requests for "The Seven Husbands of Evelyn Hugo" (After Dequeue)
═══════════════════════════════════════════════════════
1. Dr. Williams      (Requested: March 18, 2024)  ← Front (now first)
2. Sarah Kim         (Requested: March 22, 2024)
3. Mr. Rodriguez     (Requested: March 25, 2024)
4. Mr. Chen          (Requested: March 28, 2024)
5. Emma Thompson     (Requested: March 30, 2024)  ← Back
\`\`\`

"See how Dr. Williams is now at the front?" Maya asked. "When we dequeue Mrs. Patterson, everyone else moves up one position. Dr. Williams will be the next person to get the book when it's returned again."

### Peek: Checking Who's Next

Sam looked at the screen curiously. "So Dr. Williams is definitely next?"

"Let me show you how to check," Maya said. "This is called **peek** or **front** - looking at who's at the front of the queue without removing them."

She pointed to Dr. Williams' entry. "Peek lets us see who's next without actually processing their request yet. Maybe we want to check if they still want the book, or see if their contact information is current."

## The Fairness Principle

Alex was starting to understand the pattern. "So with stacks, we didn't care about the order because all the books needed to be processed anyway. But with queues, the order matters because it affects fairness."

"Exactly!" Maya said. "Let me give you another example. Imagine if our library's printer worked like a stack instead of a queue."

She walked over to the printer, which had a small display showing the print queue:

\`\`\`
Print Queue:
1. Maya's Report (submitted 9:00 AM)     ← Front
2. Sam's Flyers (submitted 9:15 AM)
3. Alex's Schedule (submitted 9:30 AM)   ← Back
\`\`\`

"If this were a stack," Maya explained, "Alex's schedule would print first, then Sam's flyers, then my report. But I submitted mine first - that wouldn't be fair, would it?"

"No," Alex agreed. "You should get your printout first since you requested it first."

"Right! That's why printers use queues. First job in, first job out. It's fair and predictable."

## ⏱️ Alex's First Challenge!

Maya pulled out a tablet and opened a coding environment. "Alex, I want you to try something. I've created a digital version of our hold request system using a queue. Let's see if you can use the queue operations we just learned about."

"You mean... I get to actually code with queues?" Alex's eyes lit up.

"Exactly! But here's the thing - you don't need to build the queue from scratch. I've already created one for you. Your job is to **use** the queue operations to solve real library problems."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`processAllHoldRequests()\` to process all patrons in a hold queue
- Use \`queue.dequeue()\` and \`queue.isEmpty()\` operations
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This first challenge simulates what we just did manually," Maya explained. "You need to process all the hold requests in the queue, one by one, until it's empty. Remember - first in, first out!"

## Queue Operations Summary

Maya pulled out her notepad again and sketched the key operations:

### Core Queue Operations

**Enqueue (Adding a hold request)**
- Adds an element to the back of the queue
- Time Complexity: O(1) - always fast
- Example: Emma joining the hold list

**Dequeue (Fulfilling a hold request)**
- Removes and returns the front element from the queue
- Time Complexity: O(1) for linked list implementation, O(n) for simple array
- Returns an error if the queue is empty
- Example: Mrs. Patterson getting her book

**Peek/Front (Checking who's next)**
- Returns the front element without removing it
- Time Complexity: O(1) - quick check
- Returns an error if the queue is empty
- Example: Seeing that Dr. Williams is next

**isEmpty (Checking if anyone is waiting)**
- Checks if the queue has any elements
- Time Complexity: O(1) - quick check
- Example: Seeing if there are any pending hold requests

**Size (Counting the requests)**
- Returns the number of elements in the queue
- Time Complexity: O(1) - if we keep track
- Example: Knowing how many people are waiting

## Why Queue Efficiency Matters

"Here's something important to understand about queues," Maya said, tapping her pen thoughtfully. "The dequeue operation can be tricky depending on how we implement the queue."

She drew two diagrams:

\`\`\`
Simple Array Queue (Inefficient):
[Mrs.P][Dr.W][Sarah][Mr.R][Mr.C][Emma]
 ↑ Remove from front (dequeue)
                                    ↑ Add to back (enqueue)

When we dequeue Mrs.P, everyone shifts left:
[Dr.W][Sarah][Mr.R][Mr.C][Emma][    ]
\`\`\`

"If we use a simple array and remove from the front, we have to shift everyone else over. That's O(n) time - slow!"

\`\`\`
Better Queue Implementation:
Front pointer → [Dr.W][Sarah][Mr.R][Mr.C][Emma] ← Back pointer

When we dequeue, just move the front pointer:
        Front → [Sarah][Mr.R][Mr.C][Emma] ← Back
\`\`\`

"But with a smarter implementation - like using pointers or a linked list - we can make dequeue O(1) too. That's much faster!"

Alex nodded. "So the choice of implementation affects performance, just like with stacks?"

"Exactly. Tomorrow we'll explore different ways to implement both stacks and queues, and you'll see the trade-offs."

## ⏱️ Alex's Second Challenge!

"Now let's try something more complex," Maya said, pulling up another coding challenge. "Sometimes we need to search through our hold queue to see if a specific patron is waiting, but we can't just remove everyone from the line."

"How do we do that?" Alex asked, intrigued.

"Great question! We need to temporarily move patrons to another queue while we search, then put them all back in the same order. This preserves the original queue while letting us check every patron."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`findPatronInQueue()\` to search for a patron without permanently removing patrons
- Use \`queue.dequeue()\`, \`queue.enqueue()\`, and a temporary queue
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you that sometimes you need to use multiple queues together to solve a problem," Maya explained.

## Real-World Queue Applications

As the morning rush began to pick up, Maya pointed out other queues in action around the library:

### 1. Patron Service Line
"Look at our reference desk," Maya said. "People naturally form a line - that's a queue. First person in line gets helped first."

### 2. Computer Reservation System
"Our public computers use a queue too. When all computers are busy, people can join a waiting list. The first person to sign up gets the next available computer."

### 3. Event Registration
"Remember our book club registration? We had limited spots, so we used a queue. First to register, first to get a spot. Fair and simple."

### 4. Interlibrary Loan Requests
"When we request books from other libraries, those requests go into a queue at the lending library. They process requests in the order received."

## ⏱️ Alex's Third Challenge!

"One more challenge," Maya said with a smile. "Sometimes we only want to process hold requests until we find a specific patron. Maybe there's a patron with special handling instructions, and we want to stop when we reach them."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`processUntilTargetPatron()\` to process patrons until finding a target patron
- Use \`queue.dequeue()\` and \`queue.isEmpty()\` with conditional logic
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"Excellent work, Alex!" Maya said as Alex completed the challenges. "You've now experienced how to use queues to solve real-world problems while maintaining fairness."

## Comparing Stacks and Queues

As they took a short break, Alex reflected on the two days of learning. "So stacks and queues are like opposites?"

Maya smiled. "In some ways, yes. Let me show you the key differences:"

| Aspect | Stack (LIFO) | Queue (FIFO) |
|--------|--------------|--------------|
| **Access Points** | One end (top) | Two ends (front & back) |
| **Add Operation** | Push to top | Enqueue to back |
| **Remove Operation** | Pop from top | Dequeue from front |
| **Order** | Last In, First Out | First In, First Out |
| **Use When** | Order doesn't matter or you want LIFO | Fairness/order matters |
| **Examples** | Book returns, undo systems | Hold requests, print jobs |

"The key is choosing the right tool for the job," Maya explained. "When fairness matters, use a queue. When you need LIFO behavior or order doesn't matter, use a stack."

## Sam's Learning Moment

Sam, who had been quietly listening, suddenly spoke up. "Wait, I think I made a mistake earlier. I told Mr. Chen he could have the book, but he should be last in the queue, right?"

"That's right," Maya said gently. "It's a common mistake when you're learning. The important thing is that you recognized it. What should we do?"

Sam thought for a moment. "Call Mr. Chen and explain that Mrs. Patterson was first in line, so she gets the book first. Then let him know he's fifth in the queue."

"Perfect!" Maya beamed. "That's exactly right. And this is why understanding data structures matters - it helps us make fair, consistent decisions."

## Looking Ahead

As the morning lesson concluded, Alex felt confident about the difference between stacks and queues. "So tomorrow we'll learn how to actually build these systems?"

"Exactly," Maya said. "We'll start by creating a digital version of our book return cart - implementing a stack class. Then we'll build a proper hold request system - implementing a queue class."

"Will we write actual code?" Alex asked excitedly.

"Absolutely. You'll see how the concepts we've learned translate into working programs. And you'll discover why some implementations are better than others."

Sam grinned. "I can't wait to build a system that won't let me accidentally promise books to the wrong people!"

Maya laughed. "That's exactly the kind of problem good data structures solve, Sam. They help us avoid mistakes and ensure fairness."

## Key Takeaways

By the end of their second day, Alex had learned that:

- **Queues follow FIFO (First In, First Out)** - like people waiting in line
- **Queue operations work at both ends** - enqueue at back, dequeue from front
- **Fairness is the key principle** - first to request, first to receive
- **Using queues effectively** requires understanding when to apply enqueue, dequeue, peek, isEmpty, and size operations
- **Multiple queues can work together** - like using a temporary queue to search without destroying the original
- **Conditional processing** with queues allows you to stop when certain conditions are met
- **Enqueue adds to the back** - like joining the end of a line
- **Dequeue removes from the front** - like being served first in line
- **Peek looks at the front without removing** - like seeing who's next
- **Implementation affects performance** - simple arrays can be slow for dequeue
- **Real-world applications include** hold systems, print queues, service lines
- **Choose the right structure** - stacks for LIFO, queues for fairness
- **You don't always need to implement queues from scratch** - focus on using them to solve problems

Through hands-on coding challenges, Alex discovered that understanding how to **use** data structures is just as important as knowing how they work internally. The hold request system had revealed the power and importance of queues. What started as a simple question about book fairness had opened up a whole new way of thinking about organizing and processing information.

"Maya," Alex said as they prepared for the lunch break, "I never realized how much computer science was involved in running a library."

Maya's smile was warm and knowing. "That's the beautiful thing about this work, Alex. Every system we use, every process we follow, has been carefully designed to be fair, efficient, and reliable. Tomorrow, you'll learn how to build these systems yourself."

As Alex headed to lunch, they couldn't help but notice the queue forming at the café counter, and smiled, understanding now why everyone waited patiently in line instead of crowding around the register. The principles of computer science were everywhere, making life more organized and fair for everyone.`,
  exercise: {
    starterCode: `// ✅ Prebuilt Queue class - intentionally compressed to a single line — all methods (enqueue, dequeue, peek, isEmpty, size) are implemented correctly.
// 🔒 You can trust it works. Focus on how to use it, not how it's built in this exercise.
class Queue{constructor(){this.items=[]}enqueue(item){this.items.push(item)}dequeue(){if(this.isEmpty())throw new Error("Queue is empty - cannot dequeue");return this.items.shift()}peek(){if(this.isEmpty())throw new Error("Queue is empty - cannot peek");return this.items[0]}isEmpty(){return this.items.length===0}size(){return this.items.length}}
    /*
Problem: Using Queue Operations to Manage Library Hold Requests

Maya has provided you with a Queue class to help manage hold requests fairly.
Your job is to USE the queue operations to solve real library problems!

Available Queue Operations:
- queue.enqueue(item): Add a patron to the back of the hold request line
- queue.dequeue(): Remove and return the patron from the front of the line
- queue.peek(): Look at who's next in line without removing them
- queue.isEmpty(): Check if there are any pending hold requests
- queue.size(): Get the number of patrons waiting

Complete the functions below to help Alex manage hold requests fairly!
*/

// The Queue class is (already implemented for you!)

// ⏱️ Alex's First Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function processAllHoldRequests(holdQueue) {
  // Process all hold requests in the queue (FIFO order)
  // Return an array of processed patrons in the order they were served
  const servedPatrons = [];
  
  // TODO: Use queue operations to process all hold requests
  // Hint: Keep dequeuing patrons until the queue is empty
  
  return servedPatrons;
}
*/

// ⏱️ Alex's Second Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function findPatronInQueue(holdQueue, targetPatron) {
  // Look through the hold queue to see if a specific patron is waiting
  // WITHOUT permanently removing patrons from the queue
  // Return true if found, false if not found
  
  const tempQueue = new Queue();
  let found = false;
  
  // TODO: Use queue operations to search through patrons
  // Hint: You'll need to temporarily move patrons to search, then put them back in order
  
  return found;
}
*/

// ⏱️ Alex's Third Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function processUntilTargetPatron(holdQueue, targetPatron) {
  // Process hold requests until you find the target patron
  // Return an array of all served patrons (including the target)
  // If target not found, process all patrons
  
  const servedPatrons = [];
  
  // TODO: Use queue operations to process patrons until target is found
  // Hint: Keep dequeuing and checking each patron
  
  return servedPatrons;
}
*/`,
solution: `
// ✅ Prebuilt Queue class - intentionally compressed to a single line — all methods (enqueue, dequeue, peek, isEmpty, size) are implemented correctly.
// 🔒 You can trust it works. Focus on how to use it, not how it's built in this exercise.
class Queue{constructor(){this.items=[]}enqueue(item){this.items.push(item)}dequeue(){if(this.isEmpty())throw new Error("Queue is empty - cannot dequeue");return this.items.shift()}peek(){if(this.isEmpty())throw new Error("Queue is empty - cannot peek");return this.items[0]}isEmpty(){return this.items.length===0}size(){return this.items.length}}
/*
Problem: Using Queue Operations to Manage Library Hold Requests

Complete solution showing how to use queue operations effectively.
*/

function processAllHoldRequests(holdQueue) {
  // Process all hold requests in the queue (FIFO order)
  // Return an array of processed patrons in the order they were served
  const servedPatrons = [];
  
  // Keep processing until queue is empty
  while (!holdQueue.isEmpty()) {
    const patron = holdQueue.dequeue();
    servedPatrons.push(patron);
    console.log("Served:", patron);
  }
  
  return servedPatrons;
}

function findPatronInQueue(holdQueue, targetPatron) {
  // Look through the hold queue to see if a specific patron is waiting
  // WITHOUT permanently removing patrons from the queue
  const tempQueue = new Queue();
  let found = false;
  
  // Move patrons to temp queue while searching
  while (!holdQueue.isEmpty()) {
    const patron = holdQueue.dequeue();
    tempQueue.enqueue(patron);
    
    if (patron === targetPatron) {
      found = true;
    }
  }
  
  // Put all patrons back in original order
  while (!tempQueue.isEmpty()) {
    holdQueue.enqueue(tempQueue.dequeue());
  }
  
  return found;
}

function processUntilTargetPatron(holdQueue, targetPatron) {
  // Process hold requests until you find the target patron
  // Return an array of all served patrons (including the target)
  const servedPatrons = [];
  
  while (!holdQueue.isEmpty()) {
    const patron = holdQueue.dequeue();
    servedPatrons.push(patron);
    console.log("Served:", patron);
    
    // Stop if we found our target
    if (patron === targetPatron) {
      break;
    }
  }
  
  return servedPatrons;
  }`,
  tests: [
    {
      name: "Test Queue class implementation & functionality",
      test: (code) => {
        try {
          
          const testCode = code + `
          // Test the provided Queue class
          const queue = new Queue();
          
          // Test basic operations
          queue.enqueue("test1");
          queue.enqueue("test2");
          
          const peekResult = queue.peek();
          const dequeueResult = queue.dequeue();
          const sizeResult = queue.size();
          const isEmptyResult = queue.isEmpty();
          
          return ({ peekResult, dequeueResult, sizeResult, isEmptyResult });
          `;
          
          const testResult = new Function(testCode)();
          
          if (testResult.peekResult !== "test1") {
            return new TestResult({ passed: false, message: "Queue peek() not working correctly - should return first item" });
          }
          
          if (testResult.dequeueResult !== "test1") {
            return new TestResult({ passed: false, message: "Queue dequeue() not working correctly - should return first item" });
          }
          
          if (testResult.sizeResult !== 1) {
            return new TestResult({ passed: false, message: "Queue size() not working correctly" });
          }
          
          if (testResult.isEmptyResult !== false) {
            return new TestResult({ passed: false, message: "Queue isEmpty() not working correctly" });
          }
          
          return new TestResult({ passed: true });
        } catch (error) {
          return new TestResult({ passed: false, message: error.message });
        }
      },
      message: "The provided Queue class should work correctly for all basic operations."
    },
    {
      name: "Test processAllHoldRequests function",
        test: (code) => {
          try {
            // Execute the code to get the functions
            const testCode = code + `
            // Test processAllHoldRequests
            const testQueue = new Queue();
            testQueue.enqueue("Mrs. Patterson");
            testQueue.enqueue("Dr. Williams");
            testQueue.enqueue("Sarah Kim");
            
            let result = [];
            if (typeof processAllHoldRequests === 'function') {
              result = processAllHoldRequests(testQueue);
            }
            return ({ result, queueEmpty: testQueue.isEmpty() });
            `;
            const testResult = new Function(testCode)();
            if (typeof testResult.result === 'undefined') {
              return new TestResult({ passed: false, message: "processAllHoldRequests function not found. Make sure to uncomment and implement it." });
            }
            
            if (!Array.isArray(testResult.result)) {
              return new TestResult({ passed: false, message: "processAllHoldRequests should return an array" });
            }
            
            if (testResult.result.length !== 3) {
              return new TestResult({ passed: false, message: "processAllHoldRequests should return all 3 patrons" });
            }
            
            if (!testResult.queueEmpty) {
              return new TestResult({ passed: false, message: "Queue should be empty after processing all hold requests" });
            }
            
            // Check FIFO order
            const expected = ["Mrs. Patterson", "Dr. Williams", "Sarah Kim"];
            for (let i = 0; i < expected.length; i++) {
              if (testResult.result[i] !== expected[i]) {
                return new TestResult({ passed: false, message: `Expected ${expected[i]} at position ${i}, got ${testResult.result[i]}` });
              }
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "processAllHoldRequests should process all patrons in FIFO order and empty the queue."
      },
      {
        name: "Test findPatronInQueue function",
        test: (code) => {
          try {
            // Inject Queue class and execute the code
            const testCode = code + `
            // Test findPatronInQueue
            const testQueue = new Queue();
            testQueue.enqueue("Mrs. Patterson");
            testQueue.enqueue("Dr. Williams");
            testQueue.enqueue("Sarah Kim");
            
            let foundResult = false;
            let notFoundResult = false;
            let queueSizeAfter = 0;
            
            if (typeof findPatronInQueue === 'function') {
              foundResult = findPatronInQueue(testQueue, "Dr. Williams");
              notFoundResult = findPatronInQueue(testQueue, "Mr. Johnson");
              queueSizeAfter = testQueue.size();
            }
            
            return ({ foundResult, notFoundResult, queueSizeAfter });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.foundResult === 'undefined') {
              return new TestResult({ passed: false, message: "findPatronInQueue function not found. Make sure to uncomment and implement it." });
            }
            
            if (testResult.foundResult !== true) {
              return new TestResult({ passed: false, message: "findPatronInQueue should return true when patron is found" });
            }
            
            if (testResult.notFoundResult !== false) {
              return new TestResult({ passed: false, message: "findPatronInQueue should return false when patron is not found" });
            }
            
            if (testResult.queueSizeAfter !== 3) {
              return new TestResult({ passed: false, message: "Queue should still have all 3 patrons after searching (non-destructive search)" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "findPatronInQueue should search without permanently removing patrons from the queue."
      },
      {
        name: "Test processUntilTargetPatron function",
        test: (code) => {
          try {
            const testCode = code + `
            // Test processUntilTargetPatron
            const testQueue = new Queue();
            testQueue.enqueue("Mrs. Patterson");
            testQueue.enqueue("Dr. Williams");
            testQueue.enqueue("Sarah Kim");
            testQueue.enqueue("Mr. Rodriguez");
            
            let result = [];
            let remainingSize = 0;
            
            if (typeof processUntilTargetPatron === 'function') {
              result = processUntilTargetPatron(testQueue, "Sarah Kim");
              remainingSize = testQueue.size();
            }
            
            return ({ result, remainingSize });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.result === 'undefined') {
              return new TestResult({ passed: false, message: "processUntilTargetPatron function not found. Make sure to uncomment and implement it." });
            }
            
            if (!Array.isArray(testResult.result)) {
              return new TestResult({ passed: false, message: "processUntilTargetPatron should return an array" });
            }
            
            // Should process Mrs. Patterson, Dr. Williams, Sarah Kim (in that order due to FIFO)
            const expected = ["Mrs. Patterson", "Dr. Williams", "Sarah Kim"];
            if (testResult.result.length !== expected.length) {
              return new TestResult({ passed: false, message: `Expected ${expected.length} processed patrons, got ${testResult.result.length}` });
            }
            
            for (let i = 0; i < expected.length; i++) {
              if (testResult.result[i] !== expected[i]) {
                return new TestResult({ passed: false, message: `Expected ${expected[i]} at position ${i}, got ${testResult.result[i]}` });
              }
            }
            
            if (testResult.remainingSize !== 1) {
              return new TestResult({ passed: false, message: "Should have 1 patron remaining in queue (Mr. Rodriguez)" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "processUntilTargetPatron should process patrons until target is found and stop."
      },
      {
        name: "Test processUntilTargetPatron with missing target",
        test: (code) => {
          try {
            const testCode = code + `
            // Test processUntilTargetPatron with missing target
            const testQueue = new Queue();
            testQueue.enqueue("Mrs. Patterson");
            testQueue.enqueue("Dr. Williams");
            testQueue.enqueue("Sarah Kim");
            
            let result = [];
            let remainingSize = 0;
            
            if (typeof processUntilTargetPatron === 'function') {
              result = processUntilTargetPatron(testQueue, "Mr. Unknown");
              remainingSize = testQueue.size();
            }
            
            return ({ result, remainingSize });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.result === 'undefined') {
              return new TestResult({ passed: false, message: "processUntilTargetPatron function not found" });
            }
            
            // Should process all patrons when target not found
            const expected = ["Mrs. Patterson", "Dr. Williams", "Sarah Kim"];
            if (testResult.result.length !== expected.length) {
              return new TestResult({ passed: false, message: `When target not found, should process all patrons. Expected ${expected.length}, got ${testResult.result.length}` });
            }
            
            if (testResult.remainingSize !== 0) {
              return new TestResult({ passed: false, message: "Queue should be empty when target not found and all patrons processed" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "processUntilTargetPatron should process all patrons when target is not found."
      },
    ]
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Queues Introduction Questions</h2>
            <form className="auto-graded-quiz">
              <div
                className="question"
                data-answers="Hold request system for popular books,Computer reservation waiting list,Event registration with limited capacity"
              >
                <p>
                  Which of the following scenarios require a Queue (FIFO) data
                  structure to ensure fairness?
                </p>

                <label>
                  <input type="checkbox" value="Book return processing cart" />{" "}
                  📚 Book return processing cart
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Hold request system for popular books"
                  />{" "}
                  📖 Hold request system for popular books
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Computer reservation waiting list"
                  />{" "}
                  💻 Computer reservation waiting list
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Undo system in text editor" />{" "}
                  ↩️ Undo system in text editor
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Event registration with limited capacity"
                  />{" "}
                  🎫 Event registration with limited capacity
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Browser history navigation" />{" "}
                  🌐 Browser history navigation
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  <ul>
                    <li>
                      <strong>Book return processing:</strong> ❌ Incorrect —
                      Order doesnt matter for returns, Stack (LIFO) is fine.
                    </li>
                    <li>
                      <strong>Hold request system:</strong> ✅ Correct — First
                      to request should be first to receive (fairness).
                    </li>
                    <li>
                      <strong>Computer reservation:</strong> ✅ Correct — First
                      to sign up should get next available computer.
                    </li>
                    <li>
                      <strong>Undo system:</strong> ❌ Incorrect — Should undo
                      most recent action first (LIFO/Stack).
                    </li>
                    <li>
                      <strong>Event registration:</strong> ✅ Correct — First to
                      register should get priority for limited spots.
                    </li>
                    <li>
                      <strong>Browser history:</strong> ❌ Incorrect — Back
                      button goes to most recent page (LIFO/Stack).
                    </li>
                  </ul>
                </div>
              </div>

              <div className="question" data-answer="Front">
                <p>In a queue, elements are removed from which end?</p>
                <label>
                  <input type="radio" name="q1" value="Front" /> Front
                </label>
                <br />
                <label>
                  <input type="radio" name="q1" value="Back" /> Back
                </label>
                <br />
                <label>
                  <input type="radio" name="q1" value="Middle" /> Middle
                </label>
                <br />
                <label>
                  <input type="radio" name="q1" value="Any position" /> Any
                  position
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  In a queue, elements are always removed from the{" "}
                  <strong>front</strong> (dequeue operation) and added to the{" "}
                  <strong>back</strong> (enqueue operation). This maintains FIFO
                  (First In, First Out) order.
                </div>
              </div>

              <div className="question" data-answer="FIFO">
                <p>
                  What does the acronym that describes queue behavior stand for?
                  (Enter the 4-letter acronym)
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  FIFO stands for &quot;First In, First Out&quot; - the fundamental
                  principle of queue behavior where the first element added is
                  the first one to be removed, ensuring fairness.
                </div>
              </div>

              <button className="code-button test-button" type="submit">
                Submit
              </button>
            </form>
          </main>
        );
      };

      return <CheckpointComponent />;
    },
  },
};
