// ✅ Prebuilt Queue class - intentionally compressed to a single line — all methods (enqueue, dequeue, peek, isEmpty, size) are implemented correctly.
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
*/