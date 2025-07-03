import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
export const implementationTradeoffsChapter = {
  id: "implementation-tradeoffs",
  title: "Implementation Tradeoffs - Choosing the Right System",
  sectionId: "stacks-queues",
  previousChapterId: "queues-intro",
  content: `
## Alex's Fifth Day: The Board Meeting

Wednesday morning at Willowbrook Library was different. Instead of their usual coding session, Maya had invited Alex and Sam to observe a special library board meeting where they would be discussing the technology infrastructure for the new branch library opening next year.

"This is perfect timing," Maya whispered to Alex as they took seats in the back of the conference room. "Today you'll see how the concepts we've been learning apply to real-world decision making."

The library director, Dr. Elizabeth Harper, was presenting to the board. "We need to decide on the digital systems for our new branch. Maya has prepared some technical recommendations for our book management systems."

Maya stood up, her laptop connected to the projector. "Thank you, Dr. Harper. Today I want to discuss the trade-offs between different approaches to implementing our core library systems - specifically our book return processing and hold request management."

Alex leaned forward, recognizing the systems they'd been building all week.

## The Real-World Context

"Let me start with some context," Maya began, clicking to her first slide. "Our current main library processes about 500 book returns per day and manages roughly 200 active hold requests at any given time. The new branch is expected to handle similar volumes."

She clicked to the next slide showing two system architectures:

\`\`\`
System Architecture Options:

Option A: Array-Based Systems
- Book Return Stack: JavaScript Array
- Hold Request Queue: Simple Array with shift()
- Memory Usage: Lower
- Implementation Complexity: Simple
- Performance: Mixed

Option B: Optimized Systems  
- Book Return Stack: JavaScript Array (still optimal)
- Hold Request Queue: Circular Array or Linked List
- Memory Usage: Moderate
- Implementation Complexity: Higher
- Performance: Consistently Fast
\`\`\`

"The question," Maya continued, "is which approach should we choose for our new branch?"

Board member Mr. Chen raised his hand. "What's the practical difference? They both do the same thing, right?"

Maya smiled. "Great question. Let me show you with some real examples."

## Demonstrating the Performance Difference

Maya opened her laptop and projected the code they'd been working on. "Alex, Sam, would you help me demonstrate?"

Alex and Sam joined Maya at the front. "Let's simulate a busy Monday morning at the library," Maya said.

### Array-Based Stack Performance

"First, let's look at our book return system," Maya said, pulling up their BookCart implementation.

\`\`\`javascript
// Simulating Monday morning returns
const mondayReturns = new BookCart();

console.time("Processing 100 returns with stack");

// Add 100 books (like a busy morning)
for (let i = 1; i <= 100; i++) {
  mondayReturns.addBook(\`Book \${i}\`);
}

// Process all returns
while (!mondayReturns.isEmpty()) {
  mondayReturns.processNextBook();
}

console.timeEnd("Processing 100 returns with stack");
// Result: ~1-2 milliseconds
\`\`\`

"As you can see," Maya explained to the board, "our stack-based book return system is very fast. All operations are O(1), so even with hundreds of returns, it's nearly instantaneous."

### Simple Array Queue Performance

"Now let's look at hold requests with a simple array implementation," Maya continued.

\`\`\`javascript
// Simple array queue (inefficient)
class SimpleHoldQueue {
  constructor() {
    this.requests = [];
  }
  
  addRequest(patron, book) {
    this.requests.push(\`\${patron} - \${book}\`);
  }
  
  processRequest() {
    return this.requests.shift(); // O(n) operation!
  }
  
  isEmpty() {
    return this.requests.length === 0;
  }
}

const simpleQueue = new SimpleHoldQueue();

console.time("Processing 100 requests with simple queue");

// Add 100 hold requests
for (let i = 1; i <= 100; i++) {
  simpleQueue.addRequest(\`Patron \${i}\`, \`Book \${i}\`);
}

// Process all requests
while (!simpleQueue.isEmpty()) {
  simpleQueue.processRequest();
}

console.timeEnd("Processing 100 requests with simple queue");
// Result: ~15-20 milliseconds
\`\`\`

### Efficient Circular Queue Performance

"And here's our optimized circular queue," Maya said.

\`\`\`javascript
const efficientQueue = new EfficientHoldRequestQueue(150);

console.time("Processing 100 requests with circular queue");

// Add 100 hold requests
for (let i = 1; i <= 100; i++) {
  efficientQueue.addHoldRequest(\`Patron \${i}\`, \`Book \${i}\`);
}

// Process all requests
while (!efficientQueue.isEmpty()) {
  efficientQueue.processNextRequest();
}

console.timeEnd("Processing 100 requests with circular queue");
// Result: ~1-2 milliseconds
\`\`\`

Board member Ms. Rodriguez looked concerned. "That's a significant difference. What happens with larger volumes?"

## Scaling Analysis

Maya clicked to her next slide showing a performance comparison chart:

\`\`\`
Performance Comparison (Processing Time):

Queue Size    | Simple Array | Circular Array | Linked List
-------------|--------------|----------------|-------------
10 requests  | 0.1ms        | 0.1ms          | 0.1ms
100 requests | 15ms         | 1ms            | 1ms  
500 requests | 375ms        | 2ms            | 2ms
1000 requests| 1.5 seconds  | 3ms            | 3ms
5000 requests| 37.5 seconds | 8ms            | 8ms

Memory Usage per Request:
Simple Array: 8 bytes + overhead
Circular Array: 8 bytes + overhead  
Linked List: 8 bytes + 16 bytes (pointers) + overhead
\`\`\`

"As you can see," Maya explained, "the performance difference becomes dramatic with larger volumes. During our busiest days, we might process 500+ hold requests. The simple array approach would take over 6 minutes, while the optimized approaches take milliseconds."

Dr. Harper leaned forward. "What about the complexity? Our IT budget is limited."

## Implementation Complexity Analysis

Maya turned to Alex. "Alex has been learning these systems all week. Alex, can you explain the complexity differences?"

Alex stood up, feeling nervous but confident. "Well, the simple array approach is definitely easier to understand and implement. Here's what each looks like:"

### Simple Array Implementation Complexity

\`\`\`javascript
// Simple to understand and implement
class SimpleQueue {
  constructor() {
    this.items = [];
  }
  
  enqueue(item) {
    this.items.push(item);     // Easy: add to end
  }
  
  dequeue() {
    return this.items.shift(); // Easy: remove from start
  }
  
  // Total lines of core logic: ~10
  // Concepts needed: Basic arrays
  // Debugging difficulty: Low
}
\`\`\`

### Circular Array Implementation Complexity

\`\`\`javascript
// More complex but still manageable
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.front = 0;
    this.rear = 0;
    this.size = 0;
    this.capacity = capacity;
  }
  
  enqueue(item) {
    if (this.isFull()) this.resize();
    this.items[this.rear] = item;
    this.rear = (this.rear + 1) % this.capacity; // Modular arithmetic
    this.size++;
  }
  
  dequeue() {
    if (this.isEmpty()) return null;
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity; // Modular arithmetic
    this.size--;
    return item;
  }
  
  // Total lines of core logic: ~30
  // Concepts needed: Arrays, modular arithmetic, resizing
  // Debugging difficulty: Medium
}
\`\`\`

"The circular queue is more complex," Alex continued, "but it's not impossibly difficult. The key concepts are understanding modular arithmetic and managing the front and rear pointers."

Sam chimed in, "And I can tell you from experience - the bugs you get from slow systems are much harder to debug than the bugs from complex implementations!"

The board chuckled, and Maya nodded approvingly.

## Memory Usage Analysis

Maya clicked to her next slide. "Let's also consider memory usage, which affects our server costs."

\`\`\`
Memory Analysis for 1000 Hold Requests:

Simple Array Queue:
- Array storage: 8KB (8 bytes × 1000)
- Wasted space during shifts: Variable
- Peak memory during resize: 16KB
- Total estimated: ~16-24KB

Circular Array Queue:
- Array storage: 8KB (8 bytes × 1000)  
- Fixed overhead: 32 bytes (pointers, size)
- Peak memory during resize: 16KB
- Total estimated: ~16KB

Linked List Queue:
- Node storage: 24KB (24 bytes × 1000)
- No wasted space: 0KB
- No resize overhead: 0KB
- Total estimated: ~24KB

For our expected load (200 active requests):
- Simple/Circular Array: ~3-4KB
- Linked List: ~5KB
\`\`\`

"The memory differences are relatively small for our use case," Maya explained. "The performance differences are much more significant."

## Real-World Implementation Scenarios

Maya turned to address the board directly. "Let me give you some real-world scenarios to help with the decision."

### Scenario 1: Normal Operations

\`\`\`
Typical Tuesday:
- 50 book returns per hour
- 20 new hold requests per hour
- 15 hold fulfillments per hour

Simple Array Performance:
- Book returns: Excellent (stack-based)
- Hold processing: Acceptable (small queue size)
- User experience: Good

Optimized Performance:
- Book returns: Excellent (stack-based)
- Hold processing: Excellent
- User experience: Excellent
\`\`\`

### Scenario 2: Busy Periods

\`\`\`
Saturday Rush or Book Sale Day:
- 200 book returns per hour
- 80 new hold requests per hour
- 30 hold fulfillments per hour

Simple Array Performance:
- Book returns: Excellent (stack-based)
- Hold processing: Poor (queue grows large)
- User experience: Frustrated patrons, slow system

Optimized Performance:
- Book returns: Excellent (stack-based)
- Hold processing: Excellent
- User experience: Smooth operations
\`\`\`

### Scenario 3: System Failures

\`\`\`
After System Downtime:
- Backlog of 500+ requests to process
- Staff working to catch up quickly

Simple Array Performance:
- Processing time: 30+ seconds per batch
- Staff productivity: Low
- Patron satisfaction: Very poor

Optimized Performance:
- Processing time: <1 second per batch
- Staff productivity: High
- Patron satisfaction: Good
\`\`\`

## The Decision Framework

Maya presented a decision framework to the board:

\`\`\`
Decision Matrix:

Factor                | Weight | Simple Array | Circular Array | Linked List
---------------------|--------|--------------|----------------|-------------
Implementation Cost  | 20%    | 9/10         | 6/10           | 5/10
Performance         | 30%    | 4/10         | 9/10           | 9/10
Maintenance Cost    | 15%    | 8/10         | 7/10           | 6/10
Scalability         | 25%    | 3/10         | 9/10           | 9/10
Memory Efficiency   | 10%    | 8/10         | 9/10           | 6/10

Weighted Score:
Simple Array: 5.8/10
Circular Array: 7.8/10
Linked List: 7.4/10
\`\`\`

"Based on this analysis," Maya concluded, "I recommend the circular array approach for our hold request system, while keeping our current array-based stack for book returns."

## Board Questions and Discussion

Board member Mr. Chen raised his hand. "What about maintenance? Who will understand this more complex code when you're not here?"

Maya smiled. "That's exactly why we've been training Alex and Sam. Alex, can you explain how you'd teach someone else about circular queues?"

Alex thought for a moment. "I'd start with the physical analogy - imagine the array as a circular table where people sit. When someone leaves from the front, we don't move everyone around the table. We just remember where the 'front' and 'back' positions are. The modular arithmetic is just a way to wrap around when we reach the end of the table."

"And," Sam added, "the performance difference is so obvious when you see it in action. Once you experience a slow system, you really appreciate the fast one."

Ms. Rodriguez asked, "What about the cost of implementation? How much developer time are we talking about?"

Maya had prepared for this question. "Based on our experience this week, the additional complexity adds about 2-3 days of development time. But the performance benefits will save us much more time in operations, and prevent patron frustration during busy periods."

## The Technical Deep Dive

Dr. Harper asked for more technical details. Maya turned to the implementation comparison:

### Array-Based Stack (Recommended for Book Returns)

\`\`\`javascript
// Perfect for book returns - simple and fast
class BookReturnStack {
  constructor() {
    this.books = [];
  }
  
  addReturn(book) {
    this.books.push(book);           // O(1)
  }
  
  processNext() {
    return this.books.pop();         // O(1)
  }
  
  // Why this works well:
  // - LIFO matches physical book stacking
  // - All operations are O(1)
  // - Simple to implement and maintain
  // - Natural behavior for staff
}
\`\`\`

### Circular Array Queue (Recommended for Hold Requests)

\`\`\`javascript
// Optimal for hold requests - fast and fair
class HoldRequestQueue {
  constructor(capacity = 100) {
    this.requests = new Array(capacity);
    this.front = 0;
    this.rear = 0;
    this.size = 0;
    this.capacity = capacity;
  }
  
  addRequest(request) {
    if (this.isFull()) this.resize();
    this.requests[this.rear] = request;
    this.rear = (this.rear + 1) % this.capacity;  // O(1)
    this.size++;
  }
  
  processNext() {
    if (this.isEmpty()) return null;
    const request = this.requests[this.front];
    this.requests[this.front] = null;
    this.front = (this.front + 1) % this.capacity; // O(1)
    this.size--;
    return request;
  }
  
  // Why this works well:
  // - FIFO ensures fairness
  // - All operations are O(1)
  // - Scales well with volume
  // - Memory efficient
}
\`\`\`

### Alternative: Linked List Queue

\`\`\`javascript
// Alternative approach - dynamic sizing
class LinkedListQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  
  addRequest(request) {
    const node = { data: request, next: null };
    if (this.isEmpty()) {
      this.front = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    this.size++;                     // O(1)
  }
  
  processNext() {
    if (this.isEmpty()) return null;
    const request = this.front.data;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
    this.size--;
    return request;                  // O(1)
  }
  
  // Pros: Dynamic sizing, no capacity limits
  // Cons: More memory overhead, pointer management
}
\`\`\`

## The Final Recommendation

Maya concluded her presentation with a clear recommendation:

\`\`\`
Recommended Architecture for New Branch:

Book Return System:
✅ Array-based stack (current implementation)
- Reason: Perfect match for LIFO behavior
- Performance: Excellent (O(1) operations)
- Complexity: Low
- Maintenance: Easy

Hold Request System:
✅ Circular array queue (new implementation)
- Reason: Optimal balance of performance and complexity
- Performance: Excellent (O(1) operations)
- Complexity: Moderate
- Maintenance: Manageable with proper training

Computer Reservation System:
✅ Circular array queue (same as hold requests)
- Reason: Same fairness requirements
- Performance: Excellent
- Complexity: Reuse existing implementation

Event Registration System:
✅ Circular array queue (same as hold requests)
- Reason: Same fairness requirements
- Performance: Excellent  
- Complexity: Reuse existing implementation

Implementation Timeline:
- Week 1-2: Implement circular queue library
- Week 3: Integrate with hold request system
- Week 4: Testing and staff training
- Week 5: Deploy to new branch

Total Development Cost: ~3 weeks
Long-term Benefits: Faster operations, better patron experience
\`\`\`

## Board Decision

After some discussion, Dr. Harper called for a vote. "All in favor of Maya's recommendation for the circular array queue implementation?"

The vote was unanimous.

"Excellent," Dr. Harper said. "Maya, please proceed with the implementation plan. And thank you, Alex and Sam, for helping demonstrate these concepts so clearly."

As the meeting concluded, Maya turned to Alex and Sam. "You just witnessed how technical decisions get made in the real world. It's not just about the code - it's about balancing performance, complexity, cost, and maintainability."

## Key Insights from the Board Meeting

Walking back to their workstation, Alex reflected on what they'd learned:

### Technical Decision Making

"I never realized how many factors go into choosing an implementation," Alex said.

Maya nodded. "In the real world, the 'best' technical solution isn't always the right choice. You have to consider:"

- **Performance requirements**: How fast does it need to be?
- **Implementation complexity**: How hard is it to build and maintain?
- **Team capabilities**: Can your team understand and maintain it?
- **Scalability needs**: Will it handle future growth?
- **Budget constraints**: How much time and money can you invest?
- **Risk tolerance**: What happens if it breaks?

### When to Choose Each Implementation

\`\`\`
Implementation Decision Guide:

Choose Simple Array Queue when:
✅ Small data sets (< 100 items)
✅ Prototype or educational code
✅ Team has limited experience
✅ Performance is not critical
✅ Implementation time is very limited

Choose Circular Array Queue when:
✅ Medium to large data sets (100+ items)
✅ Performance is important
✅ Memory efficiency matters
✅ Team can handle moderate complexity
✅ Long-term maintenance is planned

Choose Linked List Queue when:
✅ Highly variable data set sizes
✅ Memory is abundant
✅ Dynamic sizing is crucial
✅ Team is experienced with pointers
✅ No capacity planning is possible
\`\`\`

### Performance vs Complexity Trade-offs

"The key insight," Maya explained, "is that complexity isn't always bad. Sometimes a little extra complexity upfront saves a lot of pain later."

\`\`\`
Complexity Investment Analysis:

Simple Implementation:
- Low upfront cost
- High operational cost (slow performance)
- High debugging cost (performance issues)
- High user frustration cost

Complex Implementation:
- High upfront cost
- Low operational cost (fast performance)  
- Medium debugging cost (logic issues)
- Low user frustration cost

The break-even point is usually very early in the system's lifecycle.
\`\`\`

## Real-World Applications Beyond Libraries

Sam asked, "Are these same principles used in other industries?"

Maya smiled. "Absolutely! Let me give you some examples:"

### E-commerce Websites

\`\`\`
Shopping Cart (Stack):
- Add items: push()
- Remove recent item: pop()
- View recent item: peek()
- LIFO behavior matches user expectations

Order Processing (Queue):
- New orders: enqueue()
- Process orders: dequeue()
- FIFO ensures fairness and legal compliance
\`\`\`

### Operating Systems

\`\`\`
Process Scheduling (Queue):
- New processes: enqueue()
- CPU allocation: dequeue()
- Fair scheduling requires FIFO

Function Call Stack (Stack):
- Function calls: push()
- Function returns: pop()
- LIFO matches execution model
\`\`\`

### Web Servers

\`\`\`
Request Handling (Queue):
- Incoming requests: enqueue()
- Process requests: dequeue()
- Fair handling prevents starvation

Browser History (Stack):
- Visit page: push()
- Back button: pop()
- LIFO matches user mental model
\`\`\`

## Summary: The Art of Technical Decision Making

As they wrapped up their discussion, Maya summarized the key lessons:

### Technical Excellence

"Good software engineering isn't just about writing code that works," Maya explained. "It's about making informed decisions that balance multiple competing concerns."

### The Decision Process

1. **Understand the requirements**: Performance, scalability, maintainability
2. **Analyze the options**: Simple vs optimized implementations
3. **Consider the context**: Team skills, timeline, budget
4. **Measure the trade-offs**: Quantify costs and benefits
5. **Make an informed decision**: Based on data, not just preferences
6. **Plan for the future**: Consider long-term implications

### Key Takeaways

- **Performance matters**: O(1) vs O(n) can make or break user experience
- **Complexity has costs**: But so does poor performance
- **Context drives decisions**: The same problem might have different solutions in different situations
- **Team capabilities matter**: The best solution is one your team can implement and maintain
- **Measure and compare**: Use data to support technical decisions
- **Think long-term**: Consider the total cost of ownership, not just initial development

"Tomorrow," Maya said as they prepared to leave, "we'll wrap up our week by exploring some advanced applications and preparing you for technical interviews. You'll be amazed at how much you've learned!"

Alex felt a sense of accomplishment. In just one week, they'd gone from understanding basic concepts to participating in real technical decision-making. The journey from theory to practice had been challenging but incredibly rewarding.

"Maya," Alex said, "I never thought I'd be able to contribute to a board meeting about technical architecture."

Maya smiled warmly. "That's the power of understanding fundamentals. Once you grasp the core concepts and trade-offs, you can apply them anywhere. You're well on your way to becoming a thoughtful software engineer."`,
  exercise: null,
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2> Implementation Tradeoffs Questions</h2>
            <form className="auto-graded-quiz">
              <div
                className="question"
                data-answers="Performance requirements,Team capabilities and experience,Scalability needs"
              >
                <p>
                  According to the board meeting discussion, which factors
                  should be considered when choosing between simple and
                  optimized data structure implementations?
                </p>

                <label>
                  <input type="checkbox" value="Performance requirements" /> ⚡
                  Performance requirements
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Code aesthetics and style" /> 🎨
                  Code aesthetics and style
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Team capabilities and experience"
                  />{" "}
                  👥 Team capabilities and experience
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Programming language preference"
                  />{" "}
                  💻 Programming language preference
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Scalability needs" /> 📈
                  Scalability needs
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Personal coding preferences" />{" "}
                  👤 Personal coding preferences
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  <ul>
                    <li>
                      <strong>Performance requirements:</strong> ✅ Correct —
                      Critical factor in choosing implementation approach.
                    </li>
                    <li>
                      <strong>Code aesthetics:</strong> ❌ Incorrect — While
                      important, not a primary technical decision factor.
                    </li>
                    <li>
                      <strong>Team capabilities:</strong> ✅ Correct — Team must
                      be able to implement and maintain the solution.
                    </li>
                    <li>
                      <strong>Language preference:</strong> ❌ Incorrect —
                      Implementation choice is more important than language.
                    </li>
                    <li>
                      <strong>Scalability needs:</strong> ✅ Correct — Must
                      consider future growth and performance requirements.
                    </li>
                    <li>
                      <strong>Personal preferences:</strong> ❌ Incorrect —
                      Decisions should be based on objective technical criteria.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="question" data-answer="O(n)">
                <p>
                  What is the Big O time complexity of the dequeue operation in a simple array queue implementation that uses <code>shift()</code> to remove elements from the front?
                </p>
                <label>
                  <input type="radio" name="q2" value="O(1)" />{" "}
                  O(1) - Constant time
                </label>
                <br />
                <label>
                  <input type="radio" name="q2" value="O(log n)" />{" "}
                  O(log n) - Logarithmic time
                </label>
                <br />
                <label>
                  <input type="radio" name="q2" value="O(n)" />{" "}
                  O(n) - Linear time
                </label>
                <br />
                <label>
                  <input type="radio" name="q2" value="O(n²)" />{" "}
                  O(n²) - Quadratic time
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  The <code>shift()</code> operation in a simple array queue is <strong>O(n)</strong> because it must move all remaining elements one position forward to fill the gap left by the removed element. This is why simple array queues become inefficient with larger datasets, while circular array and linked list queues maintain O(1) dequeue operations.
                </div>
              </div>

              <div className="question" data-answers="Circular array queue maintains O(1) operations,Linked list queue maintains O(1) operations">
                <p>
                  Why do circular array queues and linked list queues both maintain O(1) time complexity for enqueue and dequeue operations, while simple array queues have O(n) dequeue operations?
                </p>
                <label>
                  <input type="checkbox" value="Circular array queue maintains O(1) operations" />{" "}
                  🔄 Circular array queues use front/rear pointers and modular arithmetic to avoid shifting elements
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Simple arrays are faster for small datasets" />{" "}
                  📊 Simple arrays are inherently faster for small datasets
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Linked list queue maintains O(1) operations" />{" "}
                  🔗 Linked list queues update pointers without moving existing elements
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Memory allocation is the main factor" />{" "}
                  💾 Memory allocation patterns determine the time complexity
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Programming language determines complexity" />{" "}
                  💻 The programming language determines the time complexity
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  <ul>
                    <li><strong>Circular array queues:</strong> ✅ Correct — Use front and rear pointers with modular arithmetic to wrap around the array, avoiding the need to shift elements when dequeuing.</li>
                    <li><strong>Simple arrays faster:</strong> ❌ Incorrect — Simple arrays become slower as size increases due to O(n) shift operations.</li>
                    <li><strong>Linked list queues:</strong> ✅ Correct — Simply update the front pointer to the next node without moving any existing elements, maintaining O(1) complexity.</li>
                    <li><strong>Memory allocation:</strong> ❌ Incorrect — While memory patterns matter for cache performance, they don&apos;t change the fundamental time complexity.</li>
                    <li><strong>Programming language:</strong> ❌ Incorrect — Time complexity is determined by the algorithm design, not the language implementation.</li>
                  </ul>
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
