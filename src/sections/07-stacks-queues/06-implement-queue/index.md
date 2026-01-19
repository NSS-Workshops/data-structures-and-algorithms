## Alex's Fourth Day: The Queue Challenge

Tuesday morning at Willowbrook Library brought a new challenge. Alex arrived to find Maya and Sam huddled around a computer, looking at what appeared to be a system design diagram.

"Perfect timing, Alex," Maya said, looking up with excitement. "Today we're tackling something more complex - implementing our hold request queue system. Remember how we learned about FIFO and fairness? Now we're going to build it."

Alex settled in beside them, eager to continue their coding journey. "Is it going to be as straightforward as the BookCart stack we built yesterday?"

Maya smiled knowingly. "Queues have their own unique challenges. Unlike stacks where we only work with one end, queues need to efficiently handle both ends - adding at the back and removing from the front."

Sam looked up from his coffee. "And we definitely need this to work right. I can't afford any more mix-ups with hold requests!"

## Designing Our HoldRequestQueue Class

Maya opened a new code file. "Let's start by thinking about what our HoldRequestQueue needs to do. Alex, what operations did we perform with our physical hold request system?"

Alex thought back to Saturday's lesson. "We added new requests to the back of the line - that was enqueue. We fulfilled requests from the front - that was dequeue. And sometimes we checked who was next without processing them - that was peek."

"Excellent! And what information should each hold request contain?"

"The patron's name, the book they want, and when they requested it," Sam chimed in, having learned from his earlier mistakes.

Maya began typing:

```javascript
class HoldRequest {
  constructor(patronName, bookTitle, requestDate = new Date()) {
    this.patronName = patronName;
    this.bookTitle = bookTitle;
    this.requestDate = requestDate;
  }
  
  toString() {
    return `${this.patronName} - "${this.bookTitle}" (requested ${this.requestDate.toLocaleDateString()})`;
  }
}

class HoldRequestQueue {
  constructor() {
    // What should we use to store our hold requests?
  }
  
  // Add a hold request to the back of the queue
  addHoldRequest(patronName, bookTitle) {
    // This is our 'enqueue' operation
  }
  
  // Process the next hold request (remove from front)
  processNextRequest() {
    // This is our 'dequeue' operation
  }
  
  // Check who's next without processing
  peekNextRequest() {
    // This is our 'peek' operation
  }
  
  // Check if there are any pending requests
  isEmpty() {
    // Returns true if no requests pending
  }
  
  // Count how many requests are waiting
  getRequestCount() {
    // Returns the number of pending requests
  }
}
```

"Now," Maya said, "here's where it gets interesting. What should we use to store the requests?"

Alex thought for a moment. "An array again? But... wait, if we remove from the front, won't that be slow?"

"Excellent observation!" Maya beamed. "That's exactly the challenge with queues. Let's explore this."

## The Array Challenge

Maya drew a diagram on the whiteboard:

```
Simple Array Queue Problem:

Initial state:
[Mrs.P][Dr.W][Sarah][Mr.R] 
 ↑ Front (index 0)

After dequeue (removing Mrs.P):
[Dr.W][Sarah][Mr.R][    ]
 ↑ Front (index 0)

But we had to shift everyone left! That's O(n) - slow!
```

"See the problem?" Maya asked. "If we use a simple array and always keep the front at index 0, we have to shift all elements every time we dequeue. That's inefficient."

Sam raised his hand. "So what's the solution?"

"Great question! We have several options. Let's start with a simple approach and then improve it."

## Simple Array Implementation (Educational)

Maya guided them through a basic implementation first:

```javascript
class HoldRequestQueue {
  constructor() {
    this.requests = []; // Array to store hold requests
    console.log("📋 New hold request queue created!");
  }
  
  /**
   * Add a hold request to the back of the queue
   * @param {string} patronName - Name of the patron
   * @param {string} bookTitle - Title of the requested book
   * @returns {number} The new number of requests in queue
   */
  addHoldRequest(patronName, bookTitle) {
    const request = new HoldRequest(patronName, bookTitle);
    this.requests.push(request); // Add to back (end of array)
    console.log(`📝 Added request: ${request.toString()}`);
    return this.requests.length;
  }
  
  /**
   * Process the next hold request (remove from front)
   * @returns {HoldRequest|null} The processed request, or null if queue is empty
   */
  processNextRequest() {
    if (this.isEmpty()) {
      console.log("❌ No requests to process - queue is empty!");
      return null;
    }
    
    const request = this.requests.shift(); // Remove from front (slow!)
    console.log(`✅ Processed request: ${request.toString()}`);
    return request;
  }
  
  /**
   * Check who's next without processing the request
   * @returns {HoldRequest|null} The next request, or null if queue is empty
   */
  peekNextRequest() {
    if (this.isEmpty()) {
      console.log("👀 Queue is empty - no requests to peek at");
      return null;
    }
    
    const nextRequest = this.requests[0];
    console.log(`👀 Next request: ${nextRequest.toString()}`);
    return nextRequest;
  }
  
  /**
   * Check if the queue is empty
   * @returns {boolean} True if queue is empty, false otherwise
   */
  isEmpty() {
    return this.requests.length === 0;
  }
  
  /**
   * Get the number of requests in the queue
   * @returns {number} The number of pending requests
   */
  getRequestCount() {
    return this.requests.length;
  }
  
  /**
   * Display the current state of the queue
   * @returns {string} A visual representation of the queue
   */
  displayQueue() {
    if (this.isEmpty()) {
      return "📋 Hold Request Queue: [Empty]";
    }
    
    let display = "📋 Hold Request Queue:\n";
    this.requests.forEach((request, index) => {
      const position = index === 0 ? "🔜" : `${index + 1}.`;
      display += `  ${position} ${request.toString()}\n`;
    });
    return display;
  }
  
  /**
   * Clear all requests from the queue
   */
  clearQueue() {
    const count = this.requests.length;
    this.requests = [];
    console.log(`🧹 Cleared queue - removed ${count} requests`);
  }
}
```

"This works," Maya explained, "but notice the problem with `processNextRequest()`. The `shift()` method removes the first element and shifts all other elements left. That's O(n) time complexity."

## Testing the Simple Implementation

"Let's test this and see the performance issue in action," Maya said.

```javascript
// Create a new hold request queue
const holdQueue = new HoldRequestQueue();

// Simulate a busy day with multiple hold requests
console.log("=== Adding Hold Requests ===");
holdQueue.addHoldRequest("Mrs. Patterson", "The Seven Husbands of Evelyn Hugo");
holdQueue.addHoldRequest("Dr. Williams", "Educated");
holdQueue.addHoldRequest("Sarah Kim", "Where the Crawdads Sing");
holdQueue.addHoldRequest("Mr. Rodriguez", "The Midnight Library");

// Check the queue state
console.log(holdQueue.displayQueue());

// Check who's next
holdQueue.peekNextRequest();

// Process some requests
console.log("\n=== Processing Requests ===");
holdQueue.processNextRequest(); // Should process Mrs. Patterson
holdQueue.processNextRequest(); // Should process Dr. Williams

// Check the updated queue
console.log(holdQueue.displayQueue());
console.log(`📊 Requests remaining: ${holdQueue.getRequestCount()}`);
```

When they ran the code, the output showed:

```
📋 New hold request queue created!
=== Adding Hold Requests ===
📝 Added request: Mrs. Patterson - "The Seven Husbands of Evelyn Hugo" (requested 3/30/2024)
📝 Added request: Dr. Williams - "Educated" (requested 3/30/2024)
📝 Added request: Sarah Kim - "Where the Crawdads Sing" (requested 3/30/2024)
📝 Added request: Mr. Rodriguez - "The Midnight Library" (requested 3/30/2024)
📋 Hold Request Queue:
  🔜 Mrs. Patterson - "The Seven Husbands of Evelyn Hugo" (requested 3/30/2024)
  2. Dr. Williams - "Educated" (requested 3/30/2024)
  3. Sarah Kim - "Where the Crawdads Sing" (requested 3/30/2024)
  4. Mr. Rodriguez - "The Midnight Library" (requested 3/30/2024)

👀 Next request: Mrs. Patterson - "The Seven Husbands of Evelyn Hugo" (requested 3/30/2024)

=== Processing Requests ===
✅ Processed request: Mrs. Patterson - "The Seven Husbands of Evelyn Hugo" (requested 3/30/2024)
✅ Processed request: Dr. Williams - "Educated" (requested 3/30/2024)
📋 Hold Request Queue:
  🔜 Sarah Kim - "Where the Crawdads Sing" (requested 3/30/2024)
  2. Mr. Rodriguez - "The Midnight Library" (requested 3/30/2024)
📊 Requests remaining: 2
```

"Perfect! It works correctly," Alex observed. "But you said it's slow?"

"Right," Maya replied. "It works, but every time we process a request, we're shifting all remaining requests. With hundreds of requests, that becomes very slow."

## The Efficient Solution: Circular Queue

"So how do we fix this?" Sam asked.

Maya smiled. "We use a clever technique called a circular queue. Instead of always keeping the front at index 0, we use pointers to track where the front and back are."

She drew another diagram:

```
Circular Queue Concept:

[    ][Dr.W][Sarah][Mr.R][    ][    ]
       ↑              ↑
     front          rear

After dequeue:
[    ][    ][Sarah][Mr.R][    ][    ]
              ↑        ↑
            front    rear

No shifting needed! Just move the front pointer.
```

"Let's implement this more efficient version," Maya said.

```javascript
class EfficientHoldRequestQueue {
  constructor(initialCapacity = 10) {
    this.capacity = initialCapacity;
    this.requests = new Array(this.capacity);
    this.front = 0;
    this.rear = 0;
    this.size = 0;
    console.log(`📋 Efficient hold request queue created (capacity: \${this.capacity})!`);
  }
  
  /**
   * Add a hold request to the back of the queue
   * @param {string} patronName - Name of the patron
   * @param {string} bookTitle - Title of the requested book
   * @returns {boolean} True if request was added successfully
   */
  addHoldRequest(patronName, bookTitle) {
    if (this.isFull()) {
      this.resize();
    }
    
    const request = new HoldRequest(patronName, bookTitle);
    this.requests[this.rear] = request;
    this.rear = (this.rear + 1) % this.capacity; // Circular increment
    this.size++;
    
    console.log(`📝 Added request: \${request.toString()}`);
    return true;
  }
  
  /**
   * Process the next hold request (remove from front)
   * @returns {HoldRequest|null} The processed request, or null if queue is empty
   */
  processNextRequest() {
    if (this.isEmpty()) {
      console.log("❌ No requests to process - queue is empty!");
      return null;
    }
    
    const request = this.requests[this.front];
    this.requests[this.front] = null; // Clear the slot
    this.front = (this.front + 1) % this.capacity; // Circular increment
    this.size--;
    
    console.log(`✅ Processed request: \${request.toString()}`);
    return request;
  }
  
  /**
   * Check who's next without processing the request
   * @returns {HoldRequest|null} The next request, or null if queue is empty
   */
  peekNextRequest() {
    if (this.isEmpty()) {
      console.log("👀 Queue is empty - no requests to peek at");
      return null;
    }
    
    const nextRequest = this.requests[this.front];
    console.log(`👀 Next request: \${nextRequest.toString()}`);
    return nextRequest;
  }
  
  /**
   * Check if the queue is empty
   * @returns {boolean} True if queue is empty, false otherwise
   */
  isEmpty() {
    return this.size === 0;
  }
  
  /**
   * Check if the queue is full
   * @returns {boolean} True if queue is full, false otherwise
   */
  isFull() {
    return this.size === this.capacity;
  }
  
  /**
   * Get the number of requests in the queue
   * @returns {number} The number of pending requests
   */
  getRequestCount() {
    return this.size;
  }
  
  /**
   * Resize the queue when it becomes full
   * @private
   */
  resize() {
    const newCapacity = this.capacity * 2;
    const newRequests = new Array(newCapacity);
    
    // Copy existing requests to new array in order
    for (let i = 0; i < this.size; i++) {
      const index = (this.front + i) % this.capacity;
      newRequests[i] = this.requests[index];
    }
    
    this.requests = newRequests;
    this.front = 0;
    this.rear = this.size;
    this.capacity = newCapacity;
    
    console.log(`📈 Queue resized to capacity: \${this.capacity}`);
  }
  
  /**
   * Display the current state of the queue
   * @returns {string} A visual representation of the queue
   */
  displayQueue() {
    if (this.isEmpty()) {
      return "📋 Hold Request Queue: [Empty]";
    }
    
    let display = "📋 Hold Request Queue:\\n";
    for (let i = 0; i < this.size; i++) {
      const index = (this.front + i) % this.capacity;
      const request = this.requests[index];
      const position = i === 0 ? "🔜" : `\${i + 1}.`;
      display += `  \${position} \${request.toString()}\\n`;
    }
    return display;
  }
}
```

"Wow," Alex said, studying the code. "This is more complex, but I can see how it's more efficient. No shifting required!"

"Exactly!" Maya replied. "All operations are now O(1) - constant time, regardless of how many requests are in the queue."


## Understanding the Performance Difference

Maya pulled up a performance comparison:

```
Performance Comparison:

Simple Array Queue:
- enqueue: O(1) - just push to end
- dequeue: O(n) - shift all elements
- peek: O(1) - look at first element

Circular Array Queue:
- enqueue: O(1) - just update rear pointer
- dequeue: O(1) - just update front pointer  
- peek: O(1) - look at front element

With 1000 requests:
- Simple queue dequeue: ~1000 operations
- Circular queue dequeue: ~1 operation
```

"The difference becomes huge with large queues," Maya explained. "Imagine if we had hundreds of hold requests!"


## Testing the Efficient Implementation

"Let's test our efficient queue," Maya said.

```javascript
// Create an efficient hold request queue
const efficientQueue = new EfficientHoldRequestQueue(5); // Small capacity to test resizing

console.log("=== Testing Efficient Queue ===");

// Add requests to test normal operation
efficientQueue.addHoldRequest("Alice Johnson", "Dune");
efficientQueue.addHoldRequest("Bob Smith", "Foundation");
efficientQueue.addHoldRequest("Carol Davis", "Neuromancer");

console.log(efficientQueue.displayQueue());

// Add more requests to trigger resizing
efficientQueue.addHoldRequest("David Wilson", "Snow Crash");
efficientQueue.addHoldRequest("Emma Brown", "The Martian");
efficientQueue.addHoldRequest("Frank Miller", "Ready Player One"); // This should trigger resize

console.log(efficientQueue.displayQueue());

// Process some requests
console.log("\\n=== Processing Requests ===");
efficientQueue.processNextRequest();
efficientQueue.processNextRequest();

console.log(efficientQueue.displayQueue());
```

## Real-World Applications in the Library

"Now that we have an efficient queue," Maya said, "let's see how we can use it for other library systems."

### 1. Computer Reservation System

```javascript
class ComputerReservationQueue {
  constructor() {
    this.waitingQueue = new EfficientHoldRequestQueue();
    this.availableComputers = 5;
  }
  
  addToWaitingList(patronName) {
    if (this.availableComputers > 0) {
      console.log(`💻 Computer available for \${patronName} immediately!`);
      this.availableComputers--;
      return true;
    } else {
      this.waitingQueue.addHoldRequest(patronName, "Computer Access");
      console.log(`⏳ \${patronName} added to waiting list. Position: \${this.waitingQueue.getRequestCount()}`);
      return false;
    }
  }
  
  computerBecameAvailable() {
    if (!this.waitingQueue.isEmpty()) {
      const nextRequest = this.waitingQueue.processNextRequest();
      console.log(`💻 Computer now available for \${nextRequest.patronName}!`);
    } else {
      this.availableComputers++;
      console.log("💻 Computer available - no one waiting");
    }
  }
  
  checkWaitingList() {
    if (this.waitingQueue.isEmpty()) {
      console.log("📋 No one waiting for computers");
    } else {
      console.log(`📋 \${this.waitingQueue.getRequestCount()} people waiting for computers`);
      this.waitingQueue.peekNextRequest();
    }
  }
}

// Test the computer reservation system
const computerQueue = new ComputerReservationQueue();
computerQueue.addToWaitingList("Student A");
computerQueue.addToWaitingList("Student B");
computerQueue.addToWaitingList("Student C");
computerQueue.addToWaitingList("Student D");
computerQueue.addToWaitingList("Student E");
computerQueue.addToWaitingList("Student F"); // Should go to waiting list

computerQueue.checkWaitingList();
computerQueue.computerBecameAvailable(); // Student F gets computer
computerQueue.checkWaitingList();
```

### 2. Event Registration Queue

```javascript
class EventRegistrationQueue {
  constructor(eventName, maxCapacity) {
    this.eventName = eventName;
    this.maxCapacity = maxCapacity;
    this.registeredCount = 0;
    this.waitingList = new EfficientHoldRequestQueue();
  }
  
  registerForEvent(patronName, email) {
    if (this.registeredCount < this.maxCapacity) {
      this.registeredCount++;
      console.log(`🎉 \${patronName} registered for "\${this.eventName}"! Spot \${this.registeredCount}/\${this.maxCapacity}`);
      return true;
    } else {
      this.waitingList.addHoldRequest(patronName, `\${this.eventName} - \${email}`);
      console.log(`⏳ \${patronName} added to waiting list for "\${this.eventName}". Position: \${this.waitingList.getRequestCount()}`);
      return false;
    }
  }
  
  cancelRegistration() {
    if (this.registeredCount > 0) {
      this.registeredCount--;
      
      if (!this.waitingList.isEmpty()) {
        const nextRequest = this.waitingList.processNextRequest();
        this.registeredCount++;
        console.log(`🎉 \${nextRequest.patronName} moved from waiting list to registered for "\${this.eventName}"!`);
      } else {
        console.log(`📉 Spot opened in "\${this.eventName}" - no one on waiting list`);
      }
    }
  }
  
  getEventStatus() {
    console.log(`📊 "\${this.eventName}" Status:`);
    console.log(`   Registered: \${this.registeredCount}/\${this.maxCapacity}`);
    console.log(`   Waiting List: \${this.waitingList.getRequestCount()} people`);
    
    if (!this.waitingList.isEmpty()) {
      console.log("   Next in line:");
      this.waitingList.peekNextRequest();
    }
  }
}

// Test event registration
const bookClub = new EventRegistrationQueue("Mystery Book Club", 3);
bookClub.registerForEvent("Alice", "alice@email.com");
bookClub.registerForEvent("Bob", "bob@email.com");
bookClub.registerForEvent("Carol", "carol@email.com");
bookClub.registerForEvent("David", "david@email.com"); // Should go to waiting list
bookClub.registerForEvent("Emma", "emma@email.com");   // Should go to waiting list

bookClub.getEventStatus();
bookClub.cancelRegistration(); // David should get the spot
bookClub.getEventStatus();
```

## Comparing Queue Implementations

As their session wrapped up, Maya created a comparison chart:

```
Queue Implementation Comparison:

Simple Array Queue:
✅ Easy to understand and implement
✅ Good for small queues
❌ O(n) dequeue operation (slow for large queues)
❌ Inefficient memory usage

Circular Array Queue:
✅ O(1) all operations (fast)
✅ Memory efficient
✅ Good for large queues
❌ More complex to implement
❌ Fixed capacity (though we can resize)

Linked List Queue (not implemented today):
✅ O(1) all operations
✅ Dynamic size (no capacity limits)
❌ Extra memory overhead for pointers
❌ More complex memory management
```

## Key Insights About Queue Implementation

"What have we learned today?" Maya asked as they prepared to wrap up.

Alex thought for a moment. "Queues are trickier than stacks because we need to efficiently handle both ends. The simple approach works but can be slow. The circular array approach is much faster but more complex."

"And the real-world applications are everywhere," Sam added. "Computer reservations, event registration, hold requests - anywhere fairness matters."

"Exactly!" Maya said. "The key insights are:"

### Why Queues Are Challenging
- **Two-ended access**: Unlike stacks, we need efficient operations at both ends
- **Performance trade-offs**: Simple implementations can be slow
- **Memory management**: Efficient implementations require careful pointer management

### When to Use Different Implementations
- **Simple array queue**: Small queues, educational purposes, prototyping
- **Circular array queue**: Large queues, performance-critical applications
- **Linked list queue**: When dynamic sizing is crucial, memory is abundant

### Best Practices
- **Always consider performance**: O(n) operations can become bottlenecks
- **Plan for growth**: Implement resizing or use dynamic structures
- **Test edge cases**: Empty queues, full queues, single-element queues
- **Use descriptive names**: Method names should reflect the domain (addHoldRequest vs enqueue)


## 💻 Alex's Queue Implementation Challenge!

"Alright Alex," Maya said, opening a fresh code editor window. "Yesterday you built a stack from scratch, and today you've learned all about queues. Now it's time for the ultimate test - implementing your own Queue class!"

Alex leaned forward eagerly. "This is going to be more challenging than the stack, isn't it?"

"Absolutely," Maya nodded. "Queues are trickier because you need to efficiently handle both ends - adding at the back and removing from the front. But I know you can do it!"

Sam looked over with interest. "And if Alex gets this right, we'll have a proper hold request system that can't be messed up?"

"Exactly, Sam. A bulletproof queue implementation will ensure fairness every time."

Maya pulled up the exercise template. "Alex, I've given you the basic structure. Your mission is to implement the five core queue methods that will power our entire hold request system."

🔓 **Your mission: Complete the Queue implementation below 👇**
- Implement the missing `enqueue()`, `dequeue()`, `peek()`, `isEmpty()`, and `size()` methods
- Make sure your implementation follows FIFO (First In, First Out) behavior
- Handle edge cases gracefully (return null for empty queue operations)
- **Click Run Code** to test your implementation
- **Check the test results** to see if your queue maintains fairness!

"Remember," Maya emphasized, "this isn't just an academic exercise. The queue you're building will be the foundation for fair, reliable library systems. Every patron who uses our hold request system will depend on your code working correctly."

Alex cracked their knuckles. "Let's build a queue that would make Mrs. Patterson proud!"

"That's the spirit!" Maya laughed. "Let's see what you can create!"

## Key Takeaways

By the end of the day, Alex had learned:

- **Queue implementation is more complex** than stack implementation due to two-ended access
- **Simple array queues have O(n) dequeue** operations due to element shifting
- **Circular array queues achieve O(1) operations** through clever pointer management
- **Performance matters** - the difference between O(1) and O(n) is significant with large datasets
- **Real-world applications** include computer reservations, event registration, and any fair-processing system
- **Implementation choice depends on requirements** - simplicity vs performance vs memory usage
- **Proper error handling and edge cases** are crucial for robust queue implementations

The journey from understanding queues conceptually to implementing efficient, production-ready queue classes had been challenging but rewarding. Alex now had the skills to build fair, efficient systems that could handle real-world library operations at scale.