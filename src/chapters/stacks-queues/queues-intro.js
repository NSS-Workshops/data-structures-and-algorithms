export const queuesIntroChapter = {
  id: 'queues-intro',
  title: 'Introduction to Queues',
  sectionId: 'stacks-queues',
  previousChapterId: 'stacks-intro',
  content: `## Introduction to Queues

A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. This means that the first element added to the queue is the first one to be removed.

TBD

## The Queue Concept

Think of a queue like a line of people waiting for a service:
- New people join at the back of the line
- Service is provided to people at the front of the line
- People are served in the order they arrived

\`\`\`
  Front                           Back
  ┌───┐   ┌───┐   ┌───┐   ┌───┐   ┌───┐
  │ A │ → │ B │ → │ C │ → │ D │ → │ E │
  └───┘   └───┘   └───┘   └───┘   └───┘
   ↑                               ↑
First to leave                Last to enter
\`\`\`

TBD

## Core Queue Operations

A queue supports the following primary operations:

### enqueue(element)
- Adds an element to the back of the queue
- Time Complexity: O(1)

### dequeue()
- Removes and returns the front element from the queue
- Time Complexity: O(1)
- Throws an error or returns a special value if the queue is empty

### peek() or front()
- Returns the front element without removing it
- Time Complexity: O(1)
- Throws an error or returns a special value if the queue is empty

### isEmpty()
- Checks if the queue is empty
- Time Complexity: O(1)

### size()
- Returns the number of elements in the queue
- Time Complexity: O(1)

TBD

## Real-World Applications of Queues

Queues are used in numerous applications:

### 1. Task Scheduling
- Operating systems use queues to manage processes waiting for CPU time
- Tasks are processed in the order they were received

### 2. Print Spooling
- Print jobs are queued and processed in the order they were submitted
- Multiple users can submit print jobs without waiting

### 3. Breadth-First Search
- Graph traversal algorithms use queues to explore nodes level by level
- Helps find the shortest path in unweighted graphs

### 4. Message Buffers
- Communication between processes or services often uses message queues
- Ensures messages are processed in the order they were sent

### 5. Customer Service Systems
- Call centers and support systems queue customer requests
- Ensures fair handling in the order received

### 6. Web Servers
- Incoming requests are queued and processed sequentially
- Helps manage high traffic and prevent overload

TBD

## Queue Implementation Approaches

Queues can be implemented using different underlying data structures:

### Array-Based Implementation
- Uses an array to store elements
- Maintains front and rear indices
- May use circular arrays to efficiently utilize space
- Simple but may require resizing for dynamic queues

### Linked List-Based Implementation
- Uses a linked list to store elements
- Typically maintains head and tail pointers
- Enqueue at tail, dequeue from head
- More flexible for dynamic sizing
- Slightly higher memory overhead due to pointers

### Double-Ended Queue (Deque)
- A more versatile queue that allows insertion and deletion at both ends
- Can be used to implement both stacks and queues
- Provides additional flexibility for certain algorithms

TBD

## Queue Variations

Several specialized queue types exist for different applications:

### Priority Queue
- Elements have associated priorities
- Dequeuing returns the highest-priority element
- Often implemented using heaps
- Used in scheduling algorithms, Dijkstra's algorithm, etc.

### Circular Queue
- A fixed-size queue where the end wraps around to the beginning
- Efficiently uses memory by reusing space
- Common in buffering applications

### Double-Ended Queue (Deque)
- Allows insertion and removal at both ends
- More flexible than standard queues
- Used in algorithms like sliding window problems

TBD`,
  exercise: null
};