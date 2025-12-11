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
}