export const stacksQueuesInfoSheetChapter = {
  id: 'stacks-queues-info-sheet',
  title: 'Stacks & Queues - Operations & Complexity Info Sheet',
  sectionId: 'stacks-queues',
  previousChapterId: 'implement-queue',
  nextChapterId: 'stacks-queues-supplemental-materials',
  content: `
## Stack Operations (LIFO - Last In, First Out)

| **Operation**          | **Description**                       | **Big O (Time)** |
| ---------------------- | ------------------------------------- | ---------------- |
| **Push**               | Add element to top of stack          | O(1)             |
| **Pop**                | Remove and return top element         | O(1)             |
| **Peek/Top**           | View top element without removing     | O(1)             |
| **IsEmpty**            | Check if stack is empty               | O(1)             |
| **Size**               | Get number of elements                | O(1)             |
| **Search**             | Find element in stack                 | O(n)             |

## Queue Operations (FIFO - First In, First Out)

| **Operation**          | **Description**                       | **Big O (Time)** |
| ---------------------- | ------------------------------------- | ---------------- |
| **Enqueue**            | Add element to rear of queue          | O(1)             |
| **Dequeue**            | Remove and return front element       | O(1)*            |
| **Front/Peek**         | View front element without removing   | O(1)             |
| **IsEmpty**            | Check if queue is empty               | O(1)             |
| **Size**               | Get number of elements                | O(1)             |
| **Search**             | Find element in queue                 | O(n)             |

*O(1) for linked list implementation, O(n) for naive array implementation

## Key Insights

### Stack Characteristics
- **LIFO**: Last element added is first to be removed
- **Single Access Point**: Only top element is accessible

### Queue Characteristics  
- **FIFO**: First element added is first to be removed
- **Two Access Points**: Front for removal, rear for addition
- **Fair Processing**: Elements processed in arrival order

### Implementation Considerations
- **Array-based**: Fixed size, potential overflow
- **Linked List-based**: Dynamic size, pointer overhead
- **Circular Array**: Efficient queue implementation

## Space Complexity
- **Storage**: O(n) where n is the number of elements
- **Operations**: All operations use O(1) additional space

## When to Use Stacks
✅ **Good for:**
- Function call management
- Expression evaluation and syntax parsing
- Undo operations
- Backtracking algorithms
- Browser history

## When to Use Queues
✅ **Good for:**
- Task scheduling and job processing
- Breadth-first search (BFS)
- Handling requests in web servers
- Print job management
- Buffer for data streams
`,
  exercise: null
};